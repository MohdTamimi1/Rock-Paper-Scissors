
let computerEl = ["Rock", "Paper", "Scissors"];
let playerEl = prompt("Enter Rock, Paper or Scissors to start the game");
let playerSelection = playerPlay();
let computerSelection = computerPlay();

//function ComputerPlay - to show a random value to the computerEl

function computerPlay() {
    computerEl = computerEl[Math.floor(Math.random() * computerEl.length)];
    return computerEl.toLowerCase();
}

//function playerPlay - change the value of playerEl to fix to make the palyer input case-insensitive

function playerPlay() {
    playerEl.value = playerEl.toLowerCase();
    return playerEl;
}
//function playRound - to compare the value from playerEl and the value to the computerEl

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
        return "You Win! Scissors bea Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));