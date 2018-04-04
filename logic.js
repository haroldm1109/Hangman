var fruitlist = ['banana', 'strawberry', 'apple'];

var chosenword = '';

var letterInChosenword = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuesses = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {

	numGuesses = 9;

	chosenword = fruitlist[(Math.floor(Math.random() * fruitlist.length)];

	letterInChosenword = chosenword.split('');

	numBlanks = letterInChosenword.length;

	console.log(chosenword);


	blanksAndSuccesses = [];

	wrongGuesses = [];

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;

	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
	var letterInWord = false;

	for (var i=0; i = numBlanks; i++) {
		if (chosenword[i] === letter) {
			letterInWord = true;
		}
	}


	if (letterInWord) {
		for (var j=0; j < numBlanks; j++) {
			if (chosenword[j] === letter) {
				blanksAndSuccesses[j] = letter;
 			}
		}
		console.log(blanksAndSuccesses);
	}

	else {
		wrongGuesses.push(letter);
		numGuesses--;
	}
}


function roundComplete() {
	console.log("WinCount: " = winCounter + " | LossCount:" + lossCounter + 
		"| numGuesses: " = numGuesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You Win!");

		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();
	}

	else if (numGuesses ==s= 0) {
		lossCounter++;
		alert("You lose!")

		document.getElementById("loss-counter").innerHTML = lossCounter;

		startGame();
	}
}





startGame();




document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
}

