function isEven(num) {
    if ( num % 2 == 0 ) 
        return true;
    else
        return false;
}

function factorial(num) {
    var res = num;
    if ( num = 0 ) {
        return 1;
    }
    else {
        for ( var x = num - 1 ; x >= 1; x--) {
            res = res * x;
        }
        return res;
    }
}

function kebabToSnake(str) {
    var res3 = str.replace(/-/g, "_");
    return res3;
}

var res1 = isEven(124);
console.log(res1);
var res2 = factorial(2);
console.log(res2);
var res3 = kebabToSnake("hey-mama-wasup-bud");
console.log(res3);