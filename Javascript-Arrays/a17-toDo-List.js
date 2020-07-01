console.log("*** WELCOME TO THE TO-DO LIST PORTAL ***")

var ans = prompt("What would you like to do?");
var list = [];

while ( ans != "quit" ) {
    if ( ans == "list") {
        console.log("Your ToDo List contains;");
        console.log(list);
        console.log(" ");
    }
    else if ( ans == "new") {
        var newTodo = prompt("What would you like to add?");
        list.push(newTodo);
        console.log("New item added successfully!")
    }
    else {
        alert("ERROR: Please enter a valid input!");
    }

    ans = prompt("What would you like to do?");
}

if ( ans === "quit" ) {
    console.log("*** Program Terminated ***");
}