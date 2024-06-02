const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#Meri-choice");
const possibleChoices = document.querySelectorAll("i");
const resultDisplay = document.querySelector("#result");
let userChoice;
let computerChoice;
let result;
let choice;
document.querySelector("i").addEventListener("click", function (e) {
  choice = e.target.id;
  console.log(choice);
  userChoiceDisplay.innerHTML = choice;
});

possibleChoices.forEach((faltu) =>
  faltu.addEventListener("click", function (e) {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    banaoComputerChoice();
    bataoResult();
  })
);
function banaoComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissor";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function bataoResult() {
  if (computerChoice === userChoice) {
    result = resultDisplay.innerHTML = "Draw";
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    result = resultDisplay.innerHTML = "You win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = resultDisplay.innerHTML = "You lose";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = resultDisplay.innerHTML = "You lose";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = resultDisplay.innerHTML = "You win";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = resultDisplay.innerHTML = "You lose";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = resultDisplay.innerHTML = "You win";
  }
}
