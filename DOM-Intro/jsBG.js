// SELECT

var h2 = document.querySelector("h2");
var body = document.querySelector("body");
var isBlue = false;

// MANIPULATE

h2.style.color = "yellow";

setInterval(function() {
    if ( isBlue ) {
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db"
    }
    isBlue = !isBlue;
}, 1000);