const words = wordsData; // data/wordsData.js
let wordsFall, globalScore;
let rate = 5000; // 5_000
let fallingDuration = 2 * rate;
let scoreFactor = 1;
let fallenWords = 0;
const vpWidth = window.innerWidth || Math.round(window.visualViewport.width);
const vpHeight = window.innerHeight || Math.round(window.visualViewport.height);
const prevScore = window.localStorage.getItem("prevScore") || 0;
const highScore = window.localStorage.getItem("highScore") || prevScore || 0;

// jQuery
jQuery(function ($) {
	$("#prev-score span").html(prevScore);
	$("#high-score span").html(highScore);

	$("#menu").fadeIn(200);

	$("button").one("click", playGame)
})

function playGame() {
	globalScore = 0; // setup score

	// Hide the menu
	$("#menu")
		.addClass("fadeOut")
		.one("transitionend", setupUI);

	// To never lose the input focus while playing
	$(document).click(() => $("#input").focus())

	// Drop words
	wordsFall = window.setInterval(dropWord, rate)

	// $(document).keyup(e => {
	// 	if (e.key === "Escape") endGame();
	// })
}

function dropWord() {
	// Generate random word, create the paragraph and add it to "main"
	const i = Math.floor(Math.random() * words.length);
	const word = words[i];
	const $p = $("<p>", {
		html: word,
		class: "word"
	}).appendTo($('#playground'))

	// Retrieve total width and height of the paragraph
	const pWidth = $p.outerWidth();
	const pHeight = $p.outerHeight();

	// Define random left offset (the elt has to not overflow from the screen)
	const left = Math.floor(Math.random() * (vpWidth - pWidth) + pWidth / 2);

	fallenWords += 1;

	if (fallenWords > 5) {
		rate -= 500;
		fallenWords = 0;
		scoreFactor += 1;
	}

	$p
		.css({
			"top": `${0 - pHeight}px`, // to not be visible
			"left": `${left}px` // generated position
		})
		.addClass(word)
		.animate({
			top: "100vh"
		}, {
				duration: fallingDuration,
				queue: false,
				easing: "linear",
				complete: endGame
			})
}

function setupUI() {
	$("#menu").hide();

	$("#bottom-bar").animate({
		bottom: 0,
		opacity: 1
	}, 400)

	$("#input")
		.focus()
		// REMOVEMATCH DOWN HERE \/
		.keyup(function (e) {
			if (e.key === "Enter") {
				const localScore = removeMatch(this.value);

				if (localScore) {
					$(this).val("");
					incrementScore(localScore * scoreFactor);
				} else {
					$(this).addClass("invalid");
				}
			} else {
				$(this).removeClass("invalid");
			}
		})
}

function removeMatch(value) {
	const inputVal = value.toLowerCase().trim();
	let a;
	try {
		a = $(`.${inputVal}:first`);
	} catch (e) {
		return 0;
	}

	const leftOffset = parseInt(a.css("left"));
	const localScore = parseInt(a.css("bottom"));

	const sign = leftOffset > vpWidth / 2 ? "+" : "-";

	a.stop().animate({
		left: sign + "=100",
		opacity: 0
	}, 300, () => a.remove());

	return a.length > 0 ? localScore : 0;
}

// Function to end the game
function endGame() {
	// Accelerate remaining words and remove them
	$(".word").animate({
		top: "+=25px",
		opacity: 0
	}, 200, function () { $(this).remove() });
	window.clearInterval(wordsFall);

	window.localStorage.setItem("prevScore", globalScore);

	if (!highScore || globalScore > highScore) {
		window.localStorage.setItem("highScore", globalScore);
	}

}

// Function to increment the user's score
function incrementScore(nb) {
	globalScore += nb;
	$("#score-label span").html(globalScore);
}
