"use strict"
function getComputerChoice() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		default:
			return "Scissors";
			break;
	}
}

const victories = ["Paper Rock", "Scissors Paper", "Rock Scissors"];

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase(); //I hope this works
	if (victories.includes(`${playerSelection} ${computerSelection}`)) {
		return `You win! ${playerSelection} beats ${computerSelection}`;	
	} else if (victories.includes(`${computerSelection} ${playerSelection}`)) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else {
		return `It's a tie! Both players have chosen ${playerSelection}`;
	}
}
/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("Make your move: ");	
		let round = playRound(playerSelection, getComputerChoice());
		switch(round.substring(0, 8)) {
			case "You win!":
				playerScore++;
				break;
			case "You lose":
				computerScore++;
				break;
			default:
				break;
		}
		console.log(`Round ${i+1}: ${round}`);
	}
	console.log(`Player: ${playerScore} \nComputer: ${computerScore}`)
	if (playerScore > computerScore) {
		console.log("You win!");
	} else if (playerScore < computerScore) {
		console.log("Computer wins!");
	} else {
		console.log("It's a tie!");
	}
}
//result div
const result = document.querySelector("#result");

//Buttons 
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", (e) => {
	result.textContent = playRound("rock", getComputerChoice());
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", (e) => {
	result.textContent = playRound("paper", getComputerChoice());
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", (e) => {
	result.textContent = playRound("scissors", getComputerChoice());	
});