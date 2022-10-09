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
const circles = document.querySelectorAll(".circle");


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

// Change Circle Color for a Player Move
function changeColor(e){
    let column = e.target.cellIndex;
        // we are targetting
    let row = [];

    for (i = 5; i > -1; i--){
        //Starting from the bottom so we go negative(-)
        if (tableRow[i].children[column].style.backgroundColor == "white"){
            // So if the cell is white (unused) we can change the color
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = "white";
                    // playerOnes Color is put in the index
                if (diagonalOne() || horizontal() || vertical()) {
                    // if any 1 of the checks are true
                       return alert(`${playerOne} WINS!!`);
                    } else {
                        playerTurn.textContent = `${playerTwo}'s turn`
                        // if the conditions are ==, then switch to the nextplayers turn
                        return currentPlayer = 2;
                    }
                }
            }else {
                // Else is for playerTwo
                row[0].style.backgroundColor = "brown";
            }
        }
    };

Array.prototype.forEach.call(tableData, (cell) => {
    // we are celling a fn for each element in the array
    cell.addEventListener("click", changeColor);
    // Set all circles to white for new game.
    cell.style.backgroundColor = "white";
});

// Functions for Checking for Winning Situations
// Are there 4 chips that match?
function matchingColors(one, two, three, four){
    // Are there 4 colors in a row
    // this will be used in the other functions
    return (one === two && one === three && one === four && one !== "white" && one !== undefined);
};

// Diagonal
function diagonalOne(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (matchingColors(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                // go up by 1 on the row and column every iteration
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
            }
        }
    }
};

// Second Diagnoal Condition going down
function diagonalCheckTwo(){
    for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            // We are starting from the bottom her, so --
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                // these are opposite
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                    return true;
            }
        }
    }
}

// Check if the 4 chips are horizontal?
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
};

// Are they up & down?
function vertical(){
    // should be the opposite of the horizontal conditions
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            // there are only 3 circle combinations up and down to win
            if (matchingColors(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }   
    }
};

