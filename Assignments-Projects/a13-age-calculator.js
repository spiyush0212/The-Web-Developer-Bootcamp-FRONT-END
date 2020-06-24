var years = prompt("Please enter your age in years");

var noOfLeapYears = years / 4;
var leftYears = years - noOfLeapYears;

var Days = noOfLeapYears * 366 + leftYears * 655;

alert("BE HAPPY!!! You have been alive for " + Days + " days");
console.log("BE HAPPY!!! You have been alive for " + Days + " days");