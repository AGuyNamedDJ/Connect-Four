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
const reset = document.querySelector('.reset');

// Setting the player at the start of game
let currentPlayer = 1;
let winner;
playerTurn.textContent = `${playerOne}'s turn!`
    // player one will appear

// Finding the Table Coordinates
for (let i = 0; i < boardCell.length; i++){
    // While i is less than the total # of cells
    boardCell[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
};

// Change Color for Cell Each Player
function changeColor(e){
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
        //Starting from the bottom so we go negative(-)
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
            
};



// Need to Add Event Listener to the Circles
// Review this, this may not be needed b/c in css
Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
        //Resets the color for a new game
});