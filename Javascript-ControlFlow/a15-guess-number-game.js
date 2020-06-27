alert("Welcome to the GUESS THE NUMBER game \nNow go and try to guess the 2 digit secret number!");

var secretNum = 69;
var StringGuessNum = prompt("Please enter your guess!");
var guessNum = Number(StringGuessNum);

if ( guessNum == secretNum ) {
    alert("Voila! You guessed it right!");
}

else if ( guessNum < secretNum ) {
    alert("PHEW! That's too low \nTry again!");
}

else {
    alert("PHEW! That's too high \nTry again!");
}