class Game {
	constructor(words) {
		this.words = words;
		this.onKeyUp = this.checkMatch.bind(this);
		this.prevFocusLoss = () => {
			document.querySelector("#input").focus();
		}
	}

	showStartMenu() {
		const prevScore = localStorage.getItem("prevScore") || 0;
		const highScore = localStorage.getItem("highScore") || prevScore;
		const startMenu = document.querySelector("#start-menu");
		const playButton = startMenu.querySelector("#play-btn");
		const highScoreLabel = startMenu.querySelector(".high-score span");
		const prevScoreLabel = startMenu.querySelector(".prev-score span");

		highScoreLabel.textContent = this.format(highScore);
		prevScoreLabel.textContent = this.format(prevScore);

		// if no timeout : bug (no fade in)
		window.setTimeout(() => { startMenu.className = "fadeIn" }, 10)


		// Listen for click on #play-btn

		const listener = () => {
			startMenu.className = "fadeOut";
			// Wait a bit before calling the play() method
			window.setTimeout(() => this.play(), 200);
			playButton.removeEventListener("click", listener);
		}

		// Play button click listener
		playButton.addEventListener("click", listener);

	}

	dropWord() {
		const vpWidth = window.innerWidth;
		const playground = document.querySelector("#playground");
		const random = Math.floor(Math.random() * this.words.length);
		const word = this.words[random];
		const wordElt = document.createElement("p");
		wordElt.textContent = word;
		wordElt.classList.add("word");
		wordElt.dataset.word = word;
		playground.append(wordElt);

		const wordWidth = parseInt(window.getComputedStyle(wordElt).width);

		const leftOffset = Math.round(Math.random() * (vpWidth - wordWidth) + wordWidth / 2);
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
	}

	updateInterval(rate) {

		const interval = () => {
			this.dropWord();
		}

		window.clearInterval(this.wordsFall);

		this.wordsFall = window.setInterval(interval, rate);
	}

	play() {
		const gameUI = document.querySelector("#game-ui");
		const mainInput = document.querySelector("#input");

		// Reset variables
		this.scoreFactor = 1;
		this.fallenWords = 0;
		this.rate = 5000; // 5.000
		this.fallingDuration = 2 * this.rate;
		this.score = 0;

		mainInput.focus();
		mainInput.addEventListener("keyup", this.onKeyUp);
		document.addEventListener("click", this.prevFocusLoss);

		gameUI.className = "fadeIn";

		this.updateInterval(this.rate);
	}

	incrementScore(amount) {
		const scoreLabel = document.querySelector("#score-label span");
		this.score += amount;
		scoreLabel.textContent = this.format(this.score);
	}

	checkMatch(e) {
		const mainInput = document.querySelector("#input");
		if (e.key !== "Enter") {
			mainInput.classList.remove("invalid");
			return;
		}

		const value = mainInput.value.toLowerCase();
		let match;

		try {
			match = document.querySelector(`.word[data-word="${value}"]`);
			// So that 
			if (!match) throw "No match";
		} catch (e) {
			mainInput.className = "invalid";
			return;
		}

		const matchStyle = window.getComputedStyle(match);
		const matchScore = parseInt(matchStyle.bottom);

		// Remove the matching word nicely
		match.style.top = matchStyle.top;
		match.style.transform = matchStyle.transform;
		match.style.animation = "";
		match.style.left = (parseInt(matchStyle.left) + 50) + "px";
		match.style.opacity = 0;

		match.addEventListener("transitionend", function rm() {
			match.remove();
		})

		/* The score takes in account the currenct scoreFactor, the bottom 
		offset of the match and the length of the word. The closer to the 
		top and the longer the word, the most points you get. */
		this.incrementScore(this.scoreFactor * matchScore + 25 * value.length);

		mainInput.value = "";

	}

	endGame() {
		const endScreen = document.querySelector("#end-screen");
		localStorage.setItem("prevScore", this.score);
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
