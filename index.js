// Global variables
const choices = ["rock", "paper", "scissors"];

// in the first stage before building an interface the game will run in the console

// game function to start the game 
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

// function to give the computer random choice each time we run the function
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

// function to ask the user for input
function playerChoice() {
    let input = prompt("Please enter Rock, Paper, or Scissors to start the game")
    return input.toLowerCase();
}

// function to compare the choices between player and computer

function playRound() {
    let playerSelection = playerChoice();
    console.log(playerSelection);
    let computerSelection = computerChoice();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        console.log("It's a Tie");
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            console.log("Computer Won!!")
    } else {
        console.log("Player Won!!")
    }
}

game();