console.log("Print all numbers between -10 and 19");
var startOne = -10;
while (startOne <= 19){
	console.log(startOne);
	startOne++;
}

console.log("Print all even numbers between 10 and 40");
var startTwo = 10;
while (startTwo <= 40){
	if (startTwo % 2 === 0){
		console.log(startTwo);
	}
	startTwo++;
}

console.log("Print all odd numbers between 300 and 333");
var startThree = 300;
while( startThree <= 333){
	if (startThree % 2 != 0){
		console.log(startThree);
	}
	startThree++;

}

console.log("Print all nubers divisible by 5 and 3 between 5 and 50");
var startFour = 5;
while(startFour <= 50){
	if ((startFour % 5 ===0) && (startFour % 3 ===0)){
		console.log(startFour);
	}
	startFour++;

}