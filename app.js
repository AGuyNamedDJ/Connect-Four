// Game State

    // Board
    var Board;
    var rows = 6:
    var columns = 7;

    // Game Status
    var gameEnded = false;

    // Players
    var playerOne = "one";
    var playerTwo = "two";
    var currentPlayer = playerOne;    

// When the Page Loads
window.onload = function(){
    loadBoard();
}

function loadBoard  () {
    board = [];
    for (let  i = 0; i < rows; i++){
        let row = [];
        for (let j = 0; j < columns; j++){
            row.push(" ");

            let circle = document.createElement("div");
            circle.id = i.toString() + "-" + j.toString();

        }
 

        let tile = document.createElement("div");
        tile.id = 
    }
}


// Size of Connect 4 Board = 7 Columns, 6 Rows



