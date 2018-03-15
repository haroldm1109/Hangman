var fruitlist = ['banana', 'strawberry', 'apple'];

var chosenword = '';

var letterInChosenword = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuesses = '';


var wInCounter = 0;

var lossCounter = 0;

var numGuesses = 9;







function startGame() {

	numGuesses = 9;

	chosenword = fruitlist[(Math.floor(Math.random() * fruitlist.length)];

	letterInChosenword = chosenword.split('');

	numBlanks = letterInChosenword.length;

	console.log(chosenword);

}

