// Get Player Names & Save
while (!playerOne){
    let playerOne = prompt("Player One: What is your Name? ");
    // Grabs input from player & assigns it
};
var playerOneColor = 'red';
    // Save this color for player

while (!playerTwo){
    let playerTwo = prompt("Player Two: What is your name? ");
};
var playerTwoColor = 'yellow';

// Selectors
var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');


var currentPlayer = 1;
let winner;
playerTurn.textContent = `${player1}'s turn!`

// Log cell coordinates when clicked

// Finding the Table Coordinates
for (let i = 0; i < boardCell.length; i++){
    // While i is less than the total # of cells
    boardCell[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
};