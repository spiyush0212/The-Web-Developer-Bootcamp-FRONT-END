alert("Welcome to the club!");
console.log("Welcome to the club!");
alert("Let's do a quick check on you!");
console.log("Let's do a quick check on you!");

var age = prompt("Please enter your age!");
console.log("You are " + age + " years old.");

if ( age < 0 ) {
    alert("Please enter valid age!");
    console.log("Please enter valid age!");
}
if ( age < 18 ) {
    alert("Sorry, you are underage and can not enter!");
    console.log("Sorry, you are underage and can not enter!");
}
else if ( age < 21 ) {
    alert("Join us in but you are not allowed to drink!");
    console.log("Join us in but you are not allowed to drink!");
}
else if ( age === 21 ) {
    alert("Join us and get your free drink!");
    console.log("Join us and get your free drink!");
}
else {
    alert("Join us and have fun!");
    console.log("Join us and have fun!");
}

if ( age % 2 != 0 ) {
    alert("BTW, your age is an odd number");
    console.log("BTW, your age is an odd number");
}