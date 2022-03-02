
let computerEl = ["Rock", "Paper", "Scissors"];
let playerEl = prompt("Enter Rock, Paper or Scissors to start the game")
console.log(playerEl)

//fucntion ComputerPlay - to show a random value to the computerEl
function computerPlay() {
    computerEl = computerEl[Math.floor(Math.random() * computerEl.length)];;
    return computerEl;
}
computerPlay()
console.log(computerEl)

