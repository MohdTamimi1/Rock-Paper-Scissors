let playerSelection = playerPlay();
let computerSelection = computerPlay();

//function ComputerPlay - to show a random value to the computerEl

function computerPlay() {
    let computerEl = ["Rock", "Paper", "Scissors"];
    computerEl = computerEl[Math.floor(Math.random() * computerEl.length)].toLowerCase();
    return computerEl;
}

//function playerPlay - change the value of playerEl to fix to make the palyer input case-insensitive

function playerPlay() {
    let playerEl = prompt("Enter Rock, Paper or Scissors to start the game").toLowerCase();
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

// game function is to play a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playerPlay(), i);
        console.log(computerPlay(), i);
        return (playRound(playerSelection, computerSelection), i);
    }
}

console.log(game());