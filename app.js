// Get Player Names & Save
while (!playerOne){
    var playerOne = prompt("Player One: What is your Name? ");
    // Grabs input from player & assigns it
};
var playerOneColor = "white";
    // Save this color for player

while (!playerTwo){
    var playerTwo = prompt("Player Two: What is your name? ");
};
var playerTwoColor = "brown";

let tableData = document.getElementsByTagName("td");
let tableRow = document.getElementsByTagName("tr");
let playerTurn = document.querySelector(".player-turn");
const clear = document.querySelector(".clear");
const slots = document.querySelectorAll(".slot");


// Setting the player at the start of game
let currentPlayer = 1;
    // starting with pOne
let winner;
playerTurn.textContent = `${playerOne}'s turn!`
    // player one will appear

// Finding the Table Coordinates
for (let i = 0; i < tableData.length; i++){
    // While i is less than the total # of cells
    tableData[i].addEventListener("click", (e) =>{
        // Adding event listener(click) for each cell
            // (e) event
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
            // Row is X coordinate, Y coordinate will be the column
    })
};

// Change Color for Cell Each Player
function changeColor(e){
    let column = e.target.cellIndex;
        // 
    let row = [];

    for (i = 5; i > -1; i--){
        //Starting from the bottom so we go negative(-)
        if (tableRow[i].children[column].style.backgroundColor == "white"){
            // So if the cell is white (unused) we can change the color
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = "white";
                    // playerOnes Color is put in the index
                if (horizontalCheck()) {
                       return alert(`${playerOne} WINS!!`);
                    } else{
                        playerTurn.textContent = `${playerTwo}'s turn`
                        // so if that isn't ==, then switch to playerTwo
                        return currentPlayer = 2;
                }
            }else{
                // Else is for playerTwo
                row[0].style.backgroundColor = "brown";
            }
        }
    }

Array.prototype.forEach.call(tableData, (cell) => {
    // we are celling a fn for each element in the array
    cell.addEventListener("click", changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = "white";
});

// Functions for Checking for Winning Situations
function matchingColors(one, two, three, four){
    // Are there 4 colors in a row
    // this will be used in the other functions
    return (one === two && one === three && one === four && one !== "white" && one !== undefined);
}

function horizontal(){
    for (let row = 0; row < tableRow.length; row++){
        // while this is less than 6, i++ (6 rows)
        for (let col =0; col < 4; col++){
            // theres only 4 combinations to win horizontally, so this will cover
           if (matchingColors(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor, 
            // check each row at a time & increase by 1
            // we are checking for matching colors against the background colors
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
                    // so if there are matching colors, in one of the horizontal combinations.  they win
            
                    return true;
           }
        }
    }
}

