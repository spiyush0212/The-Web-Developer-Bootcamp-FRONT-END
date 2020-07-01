var comments = {};

comments.data = [ "Lame post!", "Awesome Man!", "Bad"];

function print( arr ) {
    arr.forEach( function(value) {
        console.log(value);
    });
}

comments.print = function() {
    this.data.forEach( function(value) {
        console.log(value);
    });
}
