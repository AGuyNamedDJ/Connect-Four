// Selectors
let boardRow = document.getElementsByClassName("tr"); 
let boardCell = document.getElementsByClassName ("td");
let boardCircle = document.querySelector(".circle");
let currentChip = document.querySelector(".player-turn");
let clear = document.querySelector(".clear");

// Finding the Table Coordinates
for (let i = 0; i < boardCell.length; i++){
    // While i is less than the total # of cells
    boardCell[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
};

// Player Names
while (!playerOne) {
    var playerOne = prompt("Player One: What is your name? ");
}

let playerOneColor = "light";

while (!playerTwo) {
    var playerTwo = prompt("Player Two: What is your name? ");
}

let playerTwoColor = "dark";

let currentPlayer = 1;
currentChip.textContent = `${playerOne}'s Turn!`;






---

// // Event Listener: Setting a Chip
// boardCircle.addEventListener("click", setChip);


// //Game Status
// function setChip() {
//     if (gameEnded) {
//         return; 
//     } else {
//         let location = this.id.split("-"); 
//         // Split the str which returns an array (row, column).
//         let r = parseInt(location[0]); // row
//         let c = parseInt(location[1]); // column
//     }

//     board[r][c] = currPlayer;
//     let circle = this;
//     if (currPlayer == playerOne){
//         circle.classList.add("player-one-chip");
//     } else{
//         circle.classList.add("player-two-chip");
//     }


// }




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



