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
		this.highScoreLabel = document.querySelector(".high-score span");
		this.prevScoreLabel = document.querySelector(".prev-score span");
		this.endScores = {
			finalScoreElt: document.querySelector("#final-score span"),
			highScoreElt: document.querySelector("#high-score span")
		}

		// Functions to handle listeners while keeping the class's "this"
		this.prevFocusLoss = () => {
			document.querySelector("#input").focus();
		}

		// Update the viewport width if the window is resized
		window.addEventListener("resize", () => {
			this.vpWidth = window.innerWidth;
		})
	}

	setupListeners() {
		const playButton = document.getElementById("play-btn");
		const menuBtn = document.getElementById("btn-menu");
		const playAgainBtn = document.getElementById("btn-play-again");

		// Input listener
		this.mainInput.addEventListener("keyup", (e) => this.checkMatch(e));

		// Play button on start menu
		playButton.addEventListener("click", () => {
			this.switch(this.startMenu, this.play)
		});

		// Play again + Menu buttons (end screen)
		menuBtn.addEventListener("click", () => {
			this.switch(this.endScreen, this.startMenu)
		})

		playAgainBtn.addEventListener("click", () => {
			this.switch(this.endScreen, this.play);
		})
		//
	}

	show(elt) {
		elt.style.visibility = "visible";
		// elt.style.removeProperty("display");
		const hasHiddenClass = elt.classList.replace("hidden", "visible");
		if (!hasHiddenClass) elt.classList.add("visible");
	}

	hide(elt) {
		const hasVisibleClass = elt.classList.replace("visible", "hidden");
		if (!hasVisibleClass) elt.classList.add("hidden");

		elt.addEventListener("transitionend", function tmp(e) {
			// We don't care about children animations
			if (e.target !== elt) return;

			elt.style.visibility = "hidden";
			elt.removeEventListener("transitionend", tmp);
		})
	}

	switch(oldScreen, newScreen) {
		this.hide(oldScreen);

		const listener = () => {
			// If newScreen is a function, execute it. Else, just show it
			if (typeof newScreen === "function") newScreen.bind(this)();
			else this.show(newScreen);

			oldScreen.removeEventListener("transitionend", listener);
		}

		oldScreen.addEventListener("transitionend", listener);
	}

	showStartMenu() { // ============================================================ TO REMOVE (UPDATED AUTOMATICALLY AS SCORE CHANGES)
		this.highScoreLabel.textContent = this.format(this.highScore);
		this.prevScoreLabel.textContent = this.format(this.prevScore);

		this.show(this.startMenu);
	}

	play() {
		// Reset variables
		this.scoreFactor = 1;
		this.fallenWords = 0;
		this.rate = 5000; // 5.000
		this.fallingDuration = 2 * this.rate;
		this.score = 0;

		document.addEventListener("click", this.prevFocusLoss); // ================== ON GAME UI?

		this.show(this.gameUI);
		this.mainInput.focus();

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
			this.rate -= 500;
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

	incrementScore(amount) { // ===================================================== EDIT INNERHTML OF ELEMENTS
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
			// For when the user enters something weird (éç@_-...)
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

		/* The score takes in account the current scoreFactor, the bottom 
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

		document.removeEventListener("click", this.prevFocusLoss); // =============== LISTENER ON THIS.GAMEUI (NO NEED TO REMOVE IT ANYWHERE)

		window.clearInterval(this.wordsFall);

		// Remove words + display end Screen
		const listener = () => {
			words.forEach(word => word.remove());

			// Reset text content of score label (on game UI)
			this.scoreLabel.textContent = 0;

			this.show(this.endScreen)
			this.gameUI.removeEventListener("transitionend", listener);
		}

		this.hide(this.gameUI);
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
	let words = localStorage.getItem("words");

	if (!words) {
		const loading = document.querySelector("#loading");
		loading.classList.add("fadeIn");

		const data = await fetch("https://gist.githubusercontent.com/luddoz-c/8f189ae9648719b6b98251927b0dc81b/raw/")
			.then(d => d.json())
			.catch(console.log);

		words = data.words;

		localStorage.setItem("version", data.version);
		localStorage.setItem("words", JSON.stringify(words));

		loading.classList.remove("fadeIn");
		loading.addEventListener("transitionend", () => {
			loading.remove();
		})

	} else {
		words = JSON.parse(words);
		// no need for the loading element
		loading.remove();
	}

	// Start the game
	const game = new Game(words);
	game.setupListeners();
	game.showStartMenu();

	// Update the db in background
	fetch("https://gist.githubusercontent.com/luddoz-c/8f189ae9648719b6b98251927b0dc81b/raw/")
		.then(d => d.json())
		.then(data => {
			// If up to date, nothing else to do (so return)
			if (localStorage.version === data.version) return;

			// Update cookies
			localStorage.setItem("version", data.version);
			localStorage.setItem("words", JSON.stringify(data.words));
		})
		.catch(console.log);

}

// Launch main function
main();


// transitionend webkitTransitionEnd oTransitionEnd otransitionend