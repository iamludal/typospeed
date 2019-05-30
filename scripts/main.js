// const vpWidth = window.innerWidth || Math.round(window.visualViewport.width);
// const vpHeight = window.innerHeight || Math.round(window.visualViewport.height);
// const prevScore = window.localStorage.getItem("prevScore") || 0;
// const highScore = window.localStorage.getItem("highScore") || prevScore;
// let wordsFall, fallenWords, words, rate, fallingDuration;
let globalScore, scoreFactor;
let ended = false;


// jQuery
jQuery(async function ($) {
	// Load words
	// words = await fetch("https://api.myjson.com/bins/y9h8z")
	// 	.then(data => data.json())
	// 	.catch(console.log);

	// $(".high-score span").html(formatNb(highScore));
	// $(".prev-score span").html(formatNb(prevScore));

	// // When words are loaded, hide loading logo and display menu
	// $("#loading").fadeOut(200, () => { $("#start-menu").fadeIn(200) });

	// Play new game
	$("button").one("click", playGame)
})

// function playGame() {
// 	globalScore = 0; // setup score
// 	rate = 5000; // 5_000
// 	fallingDuration = 2 * rate;
// 	scoreFactor = 1;

// 	$startMenu.fadeOut(500, setupUI);

// 	// To never lose the input focus while playing
// 	$(document).click(() => $("#input").focus())

// 	// Drop words
// 	wordsFall = window.setInterval(dropWord, rate)
}

function dropWord() {
	// // Generate random word, create the paragraph and add it to "main"
	// const i = Math.floor(Math.random() * words.length);
	// const word = words[i];
	// const $p = $("<p>", {
	// 	html: word,
	// 	class: "word"
	// }).appendTo($('#playground'))

	// Retrieve total width and height of the paragraph
	// const pWidth = $p.outerWidth();
	// const pHeight = $p.outerHeight();

	// Define random left offset (the elt has to not overflow from the screen)
	// const left = Math.floor(Math.random() * (vpWidth - pWidth) + pWidth / 2);

	// fallenWords += 1;

	// // Increase difficulty
	// if (fallenWords >= 5) {
	// 	rate -= 400;
	// 	fallingDuration = 2 * rate;
	// 	fallenWords = 0;
	// 	scoreFactor += 1;

	// 	// Update falling interval
	// 	window.clearInterval(wordsFall);
	// 	wordsFall = window.setInterval(dropWord, rate);
	// }

	// Drop the word
	// $p
	// 	.css({
	// 		"top": `${0 - pHeight}px`, // to not be visible
	// 		"left": `${left}px` // generated position
	// 	})
	// 	.addClass(word)
	// 	.animate({
	// 		top: "100vh"
	// 	}, {
	// 			duration: fallingDuration,
	// 			queue: false,
	// 			easing: "linear",
	// 			complete: endGame
	// 		})
}

// // Function to setup the UI
// function setupUI() {
// 	$("#menu").hide();

// 	// Display bottom bar
// 	$("#bottom-bar").animate({
// 		bottom: 0,
// 		opacity: 1
// 	}, 400)

// 	// Focus the input + add event listener
// 	$("#input")
// 		.focus()
// 		.keyup(inputListener)
// }

// Function to remove an
function inputListener(event) {
	// No "enter" key pressed : only remove invalid class
	// if (event.key !== "Enter") return $(this).removeClass("invalid");

	const $input = $("#input");
	const inputVal = $input.val().trim().toLowerCase();
	let match;

	// Try to find a match for the given value
	try {
		match = $(`.${inputVal}:first`);
	} catch (e) {
		return $input.addClass("invalid");
	}

	if (!match.length) return $input.addClass("invalid");

	const leftOffset = parseInt(match.css("left"));
	const localScore = parseInt(match.css("bottom"));
	const wordLength = match.html().trim().length;

	const sign = leftOffset > vpWidth / 2 ? "+" : "-";

	// Remove word animation (left/right swipe)
	match.stop().animate({
		left: sign + "=100",
		opacity: 0
	}, 300, () => match.remove());

	// Reset input value + increment score
	$input.val("");
	incrementScore(localScore * scoreFactor + 25 * wordLength);
}

// Function to end the game
function endGame() {
	// To only trigger the function once
	if (ended) return;
	else ended = true;

	// Accelerate remaining words and remove them
	$(".word").animate({
		top: "+=25px",
		opacity: 0
	}, 200, function () { $(this).remove() });

	window.clearInterval(wordsFall);

	// Storages
	window.localStorage.setItem("prevScore", globalScore);

	$("#final-score span").html(formatNb(globalScore));

	if (!highScore || globalScore > highScore) {
		window.localStorage.setItem("highScore", globalScore);
		$("#end-scores .prev-score span").html(globalScore);
	}

	// Hide game UI
	$("#game-ui")
		.fadeOut(300, () => $("#end-screen").addClass("visible"));

	$("#end-screen").find("#btn-menu").one("click", () => {
		location.reload();
	})


}

// Function to increment the user's score
function incrementScore(nb) {
	globalScore += nb;
	$("#score-label span").html(formatNb(globalScore));
}

// Format number to readable string
function formatNb(nb) {
	let converted;
	if (typeof nb === "string") {
		return parseInt(nb).toLocaleString();
	} else if (typeof nb === "number") {
		return nb.toLocaleString();
	}
}

// To hide an element
function hideElement($elt, callback) {
	$elt
		.addClass("fadeOut")
		.one("transitionend", () => {
			$elt.fadeOut(0)
			callback()
		})
}

// To show an element
function showElement($elt, callback) {
	$elt
		.fadeIn(0)
		.addClass("fadeIn")
		.one("transitionend", callback)
}