alert("This is from JS");

// PROBLEM 1
console.log("EXERCISE 1");
var start = -10;
var end = 19;
while ( start <= end ) {
    console.log(start);
    start++;
}

// PROBLEM 2
console.log("EXERCISE 2");
var start = 10;
var end = 40;
while ( start <= end ) {
    if ( start % 2 === 0) {
        console.log(start);
    }
    start++;
}

// PROBLEM 3
console.log("EXERCISE 3");
var start = 300;
var end = 333;
while ( start <= end ) {
    if ( start % 2 !== 0) {
        console.log(start);
    }
    start++;
}

// PROBLEM 4
console.log("EXERCISE 4");
var start = 5;
var end = 50;
while ( start <= end ) {
    if ( start % 3 === 0 && start % 5 === 0) {
        console.log(start);
    }
    start++;
}