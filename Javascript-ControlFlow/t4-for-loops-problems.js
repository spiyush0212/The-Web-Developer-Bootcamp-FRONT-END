alert("This is from JS");

// PROBLEM 1
console.log("EXERCISE 1");
for ( var start = -10; start <= 19; start++) {
    console.log(start);
}

// PROBLEM 2
console.log("EXERCISE 2");
for ( var start = 10; start <= 40; start++ ) {
    if ( start % 2 === 0) {
        console.log(start);
    }
}

// PROBLEM 3
console.log("EXERCISE 3");
for ( var start = 300; start <= 330; start++ ) {
    if ( start % 2 !== 0) {
        console.log(start);
    }
}

// PROBLEM 4
console.log("EXERCISE 4");
for( var start = 5; start <= 50; start++) {
    if ( start % 3 === 0 && start % 5 === 0) {
        console.log(start);
    }
}