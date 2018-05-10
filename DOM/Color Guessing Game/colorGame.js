var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var message = document.getElementById("pickedColor");
var guessOutcome = document.getElementById("guessOutcome");
var headerBg = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = randomPick();
	message.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = randomPick();
	message.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetBtn.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = randomPick();
	message.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];	
	}
	headerBg.style.background = "steelblue";
	guessOutcome.textContent = "";
	this.textContent = "New Colors";
});

var pickedColor = randomPick();
message.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var selectedColor = this.style.background;
		if (selectedColor === pickedColor){
			guessOutcome.textContent = "Correct";
			guessOutcome.style.color = "green";
			changeSquareColors(selectedColor);
			headerBg.style.background = selectedColor;
			resetBtn.textContent = "Play Again?";
		} else {
			guessOutcome.textContent = "Try Again!"
			guessOutcome.style.color = "red";
		}
	});
}

function changeSquareColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function randomPick(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var colorsArray = [];
	for (var i = 0; i < num; i++) {
		colorsArray[i] = randomColor();
	}
	return colorsArray;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}