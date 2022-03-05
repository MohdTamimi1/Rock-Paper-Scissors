// Global variables
const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

// in the first stage before building an interface the game will run in the console

// game function to start the game 
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    // score(playerScore, computerScore);
    console.log(`
    -------------------------------
        playerScore: ${playerScore} 
        ComputerScore: ${computerScore} 
    --------------------------------`);

    // if statement to comopare the score and declares the winner
    if (computerScore === playerScore) {
        console.log("It's a Tie!!!")
    } else if (computerScore < playerScore) {
        console.log("Player Won The Game!!!")
    } else {
        console.log("Computer Won The Game!!!")
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

// function to compare the choices between player and count score for each player

function playRound() {
    let playerSelection = playerChoice();
    console.log(`Player Choice: ${playerSelection}`);
    let computerSelection = computerChoice();
    console.log(`Computer Choice: ${computerSelection}`);
    
    // compares between player choices and adds to the score each time the function is called
    if (playerSelection === computerSelection) {
        console.log("It's a Tie");
        console.log("-------------------------------");
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            console.log("Computer Won!!")
            console.log("-------------------------------")
            return computerScore += 1;
    } else {
        console.log("Player Won!!")
        console.log("-------------------------------")
        return playerScore += 1;
    }
}

// call the main function that starts the game
game();