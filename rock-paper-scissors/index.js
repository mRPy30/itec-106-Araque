const selector = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

function start(playerSelector) {
    const compChoice = selector[Math.floor(Math.random() * 3)];
    let resultMessage = "";

    if (playerSelector === compChoice) {
        resultMessage = "Opps it's a tied!";
        resultElement.style.color = "orange";
    } else {
        switch (playerSelector) {
            case "rock":
                resultMessage = (compChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                resultMessage = (compChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                resultMessage = (compChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }

        resultElement.style.color = (resultMessage === "You Win!") ? "green" : "red";

        // Update scores
        if (resultMessage === "You Win!") {
            playerScore++;
        } else {
            computerScore++;
        }
        playerScoreElement.textContent = `Player Score: ${playerScore}`;
        computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    }

    player.textContent = `Player: ${playerSelector}`;
    computer.textContent = `Computer: ${compChoice}`;
    resultElement.textContent = resultMessage;
}
