function square(x) {
    console.log(x*x);
}

square(4);
console.log("4 ka square hai " + square(4));

function square(x) {
    return(x*x);
}

square(6);
console.log("4 ka square hai " + square(6));

var result = square(123);
console.log(result);