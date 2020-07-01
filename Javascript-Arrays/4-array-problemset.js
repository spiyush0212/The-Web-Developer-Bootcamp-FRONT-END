// PRINT MAX

var nums = [ 1,2,3,4,5,6,7,8,9,10 ];
function arrayMaxNum(nums) {
    var max = nums[0];
    for ( var i = 1; i < nums.length; i++ ) {
        if ( nums[i] > max ) {
            max = nums[i];
        }
    }
    return (max);
}

// SUM ARRAY 

var nums = [ 1,2,3,4,5,6,7,8,9,10 ];
function arraySum(nums) {
    var sum = 0;
    for ( var i = 0; i < nums.length; i++ ) {
        sum = sum + nums[i];
    }
    return sum;
}

// SUM ARRAY 

var nums = [ 1,2,3,4,5,6,7,8,9,10 ];
var sum = 0;
nums.forEach(function(count) {
    sum = sum + count;
})
console.log(sum);

// REVERSE ARRAY

var alpha = [ "a","b","c","d","e" ];

function revArr( alpha ) {
    for ( var i = alpha.length - 1; i >= 0; i-- ) {
        console.log(alpha[i]);
    }
}

revArr(alpha);

// REVERSE ARRAY

var alpha = [ "a","b","c","d","e" ];

alpha.forEach( function(value) {
    console.log(value);
})

// Is Uniform

arr1 = [ 1,1,1,1];
arr2 = [ 1,1,2,1];
arr3 = [ "a","a","a"];
arr4 = [ "a","b","a"];

var flag = 0;
arr1.forEach( function(check) {
    var value = arr1[0];
    if ( check != value )
        flag = -1;
})

if ( flag == -1) {
    return false;
}
else {
    return true;
}