var string = prompt("Are we there yet?");

while ( string.indexOf("yes") == -1) {
    string = prompt("Are we there yet?");
}

alert("We finally made it!");
