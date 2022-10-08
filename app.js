// Get Player Names & Save
while (!playerOne){
    let playerOne = prompt("Player One: What is your Name? ");
    // Grabs input from player & assigns it
};
var playerOneColor = "white";
    // Save this color for player

while (!playerTwo){
    let playerTwo = prompt("Player Two: What is your name? ");
};
var playerTwoColor = "brown";

let tableRow = document.getElementsByTagName("tr");
let tableData = document.getElementsByTagName("td");
let playerTurn = document.querySelector(".player-turn");
const slots = document.querySelectorAll(".slot");
const clear = document.querySelector(".clear");

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
        if (tableRow[i].children[column].style.backgroundColor == "white"){
            // So if the cell is white (unused) we can change the color
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = "white";
                    // playerOnes Color is put in the index
                }
            }else{
                // Else is for playerTwo
                row[0].style.backgroundColor = "brown";
            }
        }
    }

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener("click", changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = "white";
});

// Functions for Checking for a Winner

function matchingColors(one, two, three, four){
    // Are there 4 colors in a row
    // this will be used in the other functions
    return (one === two && one === three && one === four && one !== "white" && one !== undefined);
}
