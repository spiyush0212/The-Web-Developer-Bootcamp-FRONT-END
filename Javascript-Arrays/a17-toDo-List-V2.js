console.log("*** WELCOME TO THE TO-DO LIST PORTAL ***")

var ans = prompt("What would you like to do?");
var list = [];

while ( ans != "quit" ) {
    if ( ans == "list") {
        showTodo();
    }
    else if ( ans == "new") {
        addTodo();
    }
    else if ( ans == "delete") {
        deleteTodo();    
    }
    else {
        error();
    }
    ans = prompt("What would you like to do?");
}

if ( ans === "quit" ) {
    console.log("Program Terminated");
    console.log("*****");
}

function showTodo() {
    console.log("Your ToDo List contains;");
    for ( var i = 0; i < list.length; i++ ) {
        console.log(i + ": " + list[i]);
    }
    console.log("*****");
}

function addTodo() {
    var newTodo = prompt("What would you like to add?");
    list.push(newTodo);
    console.log("New item added successfully!");
    console.log("*****");
}

function deleteTodo() {
    var removeTodo = prompt("Which index todo item would you like to remove?");
    list.splice(removeTodo,1);
    console.log("Item deleted successfully");
    console.log("*****");
}

function error() {
    alert("ERROR: Please enter a valid input!");
    console.log("*****");
}