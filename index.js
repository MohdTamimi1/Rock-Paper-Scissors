//fucntion created to show a random value to the computer Element

let computerEl = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    computerEl = computerEl[Math.floor(Math.random() * computerEl.length)];;
    return computerEl;
}
computerPlay()
console.log(computerEl)

