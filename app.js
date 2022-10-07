// Selectors
let boardRow = document.getElementsByClassName("tr"); 
let boardCell = document.getElementsByClassName ("td");
let boardCircle = document.querySelector(".circle");
let currentPlayer = document.querySelector(".player-turn");
let clear = document.querySelector(".clear");

// Finding the Table Coordinates
for (let i = 0; i < boardCell.length; i++){
    // While i is less than the # of cells
    boardCell[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
}

// Player Names




function setBoard() {
    if (gameEnded) {
        return; 
    } else {
        let location = this
    }
    
}



//  Scratch
// // Get the location for what slot we click on.
//  for (let i = 0; i < tableCell.length; i++) {
//     // So why i is less than the cells
//     tableCell[i].addEventListener("click", )
//  }


// Game State
    // // Board
    // var Board;
    // var rows = 6:
    // var columns = 7;

    // // Game Status
    // var gameEnded = false;

    // // Players
    // var playerOne = "one";
    // var playerTwo = "two";
    // var currentPlayer = playerOne;    



