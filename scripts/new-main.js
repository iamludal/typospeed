class Game {
	constructor(words) {
		this.words = words;
		this.vpWidth = window.innerWidth;

		// Scores data
		this.prevScore = localStorage.getItem("prevScore") || 0;
		this.highScore = localStorage.getItem("highScore") || this.prevScore;

		// DOM Elements
		this.startMenu = document.getElementById("start-menu");
		this.endScreen = document.getElementById("end-screen");
		this.gameUI = document.getElementById("game-ui");
		this.mainInput = document.getElementById("input");
		this.playground = document.getElementById("playground");
		this.scoreLabel = document.querySelector("#score-label span");
		this.playButton = document.getElementById("play-btn");
		this.highScoreLabel = document.querySelector(".high-score span");
		this.prevScoreLabel = document.querySelector(".prev-score span");
		this.endScores = {
			finalScoreElt: document.querySelector("#final-score span"),
			highScoreElt: document.querySelector("#high-score span")
		}

		// Functions to handle listeners while keeping the class's "this"
		this.onKeyUp = this.checkMatch.bind(this);
		this.prevFocusLoss = () => {
			document.querySelector("#input").focus();
		}

		// Update the viewport width if the window is resized
		window.addEventListener("resize", () => {
			this.vpWidth = window.innerWidth;
		})
	}

	showStartMenu() {
		this.highScoreLabel.textContent = this.format(this.highScore);
		this.prevScoreLabel.textContent = this.format(this.prevScore);

		// if no timeout : bug (no fade in)
		window.setTimeout(() => { this.startMenu.classList.add("visible") }, 10)


		// Listen for click on #play-btn
		const listener = () => {
			this.startMenu.classList.replace("visible", "hide");
			// Wait a bit before calling the play() method
			window.setTimeout(() => this.play(), 200);
			this.playButton.removeEventListener("click", listener);
		}

		// Play button click listener
		this.playButton.addEventListener("click", listener);

	}

	play() {
		// Reset variables
		this.scoreFactor = 1;
		this.fallenWords = 0;
		this.rate = 5000; // 5.000
		this.fallingDuration = 2 * this.rate;
		this.score = 0;

		this.mainInput.focus();
		this.mainInput.addEventListener("keyup", this.onKeyUp);
		document.addEventListener("click", this.prevFocusLoss);

		this.gameUI.classList.add("visible");

		this.updateInterval(this.rate);
	}

	dropWord() {
		const random = Math.floor(Math.random() * this.words.length);
		const word = this.words[random];
		const wordElt = document.createElement("p");
		wordElt.textContent = word;
		wordElt.classList.add("word");
		wordElt.dataset.word = word;
		this.playground.append(wordElt);

		const wordWidth = wordElt.offsetWidth;
		const leftOffset = Math.round(Math.random() * (this.vpWidth - wordWidth) + wordWidth / 2);

		this.fallenWords++;

		// Increase difficulty
		if (this.fallenWords >= 5) {
			this.rate -= 400;
			this.fallingDuration = 2 * this.rate;
			this.fallenWords = 0;
			this.scoreFactor++;

			// Update the interval
			this.updateInterval(this.rate);
		}

		wordElt.style.left = `${leftOffset}px`;
		wordElt.style.animation = `fallingWords ${this.fallingDuration}ms linear forwards`;

		wordElt.addEventListener("animationend", () => this.endGame());
	}

	incrementScore(amount) {
		this.score += amount;
		this.scoreLabel.textContent = this.format(this.score);
	}

	updateInterval(rate) {

		const interval = () => {
			this.dropWord();
		}

		window.clearInterval(this.wordsFall);

		this.wordsFall = window.setInterval(interval, rate);
	}

	checkMatch(e) {
		const value = this.mainInput.value.toLowerCase();

		if (e.key !== "Enter") {
			this.mainInput.classList.remove("invalid");
			return;
		}

		let match;

		try {
			match = document.querySelector(`.word[data-word='${value}']`);
			if (!match) throw "No match";
		} catch (e) {
			// When the user enters something weird (éç@_-...)
			// (or when there is no match)
			this.mainInput.classList.add("invalid");
			return;
		}

		const matchStyle = window.getComputedStyle(match);
		const matchScore = parseInt(matchStyle.bottom);
		const leftOffset = parseInt(matchStyle.left);

		// Remove the matching word nicely
		match.style.top = matchStyle.top;
		match.style.transform = matchStyle.transform;
		match.style.animation = "";
		match.style.opacity = 0;

		if (leftOffset > (this.vpWidth / 2)) {
			match.style.left = `${leftOffset + 50}px`;
		} else {
			match.style.left = `${leftOffset - 50}px`;
		}

		match.addEventListener("transitionend", () => {
			match.remove();
		})

		/* The score takes in account the currenct scoreFactor, the bottom 
		offset of the match and the length of the word. The closer to the 
		top and the longer the word, the most points you get. */
		this.incrementScore(this.scoreFactor * matchScore + 25 * value.length);

		this.mainInput.value = "";

	}

	endGame() {
		const words = Array.from(document.getElementsByClassName("word"));
		// Determine highest score and update cookies
		const highScore = Math.max(this.score, this.highScore);
		localStorage.setItem("prevScore", this.score);
		localStorage.setItem("highScore", highScore);

		// Update scores text content of the end screen
		this.endScores.finalScoreElt.textContent = this.format(this.score);
		this.endScores.highScoreElt.textContent = this.format(highScore);

		this.mainInput.removeEventListener("keyup", this.onKeyUp);
		document.removeEventListener("click", this.prevFocusLoss);

		window.clearInterval(this.wordsFall);

		this.gameUI.classList.remove("visible");

		const listener = () => {
			words.forEach(word => word.remove());
			this.endScreen.classList.add("visible");
			this.gameUI.removeEventListener("transitionend", listener);
		}

		this.gameUI.addEventListener("transitionend", listener);

	}

	format(number) {
		/* Convert big number into human readable number
		(depending on local format)
			E.g.: 2493942 => 2.493.942 
		*/
		if (typeof number === "string") {
			number = parseInt(number);
			if (isNaN(number)) return 0;
		}
		return number.toLocaleString();
	}
}


// Main function
const main = async () => {
	let words = JSON.parse(localStorage.getItem("words"));
	const loading = document.querySelector("#loading");

	if (!words) {
		loading.classList.add("fadeIn");

		words = await fetch("https://api.myjson.com/bins/y9h8z")
			.then(data => data.json())
			.catch(console.log);

		localStorage.setItem("words", JSON.stringify(words));

		loading.classList.remove("fadeIn");
		loading.addEventListener("transitionend", function rmLoading() {
			loading.remove();
		})

	} else {
		loading.remove();
	}

	const game = new Game(words);
	game.showStartMenu();
}

// Launch main function
main();
