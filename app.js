// Get Player Names & Save
while (!playerOne){
    let playerOne = prompt("Player One: What is your Name? ");
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


