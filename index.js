let computerSelection = computerPlay();
let playerSelection = playerPlay();
// let gameRounds = playRound(playerSelection, computerSelection);
// let result = [];

//function ComputerPlay - to show a random value to the computerEl

function computerPlay(computerChoice) {
    computerChoice = ["rock", "paper", "scissors"];
    computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerChoice.toLowerCase();
}

//function playerPlay - change the value of playerChoice to fix to make the palyer input case-insensitive

function playerPlay(playerChoice) {
    playerChoice = prompt("Enter Rock, Paper or Scissors to start the game").toLowerCase();
    return playerChoice;
}
//function playRound - to compare the value from playerChoice and the value to the computerChoice and declares the winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's A Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
}

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// game function is to play a 5 round game that keeps score and reports a winner or loser at the end

