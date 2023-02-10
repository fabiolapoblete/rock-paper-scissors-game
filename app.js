const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const pointDisplay = document.getElementById("points");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;
let points = 0;

pointDisplay.innerText = points;

for (let possibleChoice of possibleChoices) {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();
  });
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
    points++;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
    points--;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
    points++;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost!";
    points--;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost!";
    points--;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
    points++;
  }
  resultDisplay.innerText = result;
  pointDisplay.innerText = points;
}
