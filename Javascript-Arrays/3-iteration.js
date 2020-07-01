// FOR LOOP

var nums = [ 1, 2, 3, 4, 5 ];
for ( var i = 0; i < nums.length; i++ ) {
    console.log(i);
}

// FOR EACH

var colorsList = [ "violet", "indigo", "blue", "green", "yellow" ];
    
function printColor( colorName ) {
    console.log(colorName);
}

colorsList.forEach(printColor);

colorsList.forEach( function( colorNaam ) {
    console.log("This is the color = " + colorNaam)
})