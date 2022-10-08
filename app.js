// Selectors
let boardRow = document.getElementsByClassName("tr"); 
let boardCell = document.getElementsByClassName ("td");
let boardCircle = document.querySelector(".circle");
let currentChip = document.querySelector(".player-turn");
let clear = document.querySelector(".clear");

// Player Names
while (!playerOne) {
    var playerOne = prompt("Player One: What is your name? ");
    // Grabs input from player & assigns it
}
playerOneColor = "#7D5C43 ";
// Assigned

while (!playerTwo) {
    var playerTwo = prompt("Player Two: What is your name? ");
}
playerTwoColor = "rgba(0, 0, 0, 0.470)";

let currentPlayer = 1;
currentChip.textContent = `${playerOne}'s Turn!`;


// Finding the Table Coordinates
for (let i = 0; i < boardCell.length; i++){
    // While i is less than the total # of cells
    boardCell[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
};

// Need to Add Event Listener to the Circles
// Review this, this may not be needed b/c in css
Array.prototype.forEach.call(boardCell, (cell) => {
    cell.addEventListener("click", changeColor);
    cell.style.backgroundColor = "white";
})

function changeColor(e){
    let column = e.target.cellIndex;
    // When a circle is clicked, this is the index of the column
    let row = [];
    
    for (let i = 5; i > -1; i--){
        // Check the bottom 1st, so we're going negative 
        if(boardRow[i].children(column.style.backgroundColor) == "white"){
            row.push(boardRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = playerOneColor;
                playerTurn.textContent = `${playerTwo}'s Turn`;
                return currentPlayer = 2;
            }
        }
    }
}



// ---

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



