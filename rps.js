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

/* Old game() function
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
*/

//result div
const result = document.querySelector("#result");

//scores
let playerScore = 0;
let computerScore = 0;

const handlePlayerInput = (e) => {
	//line to prevent the game from continuing once a player has won
	if (playerScore === 5 || computerScore === 5) return; 
	result.replaceChildren();
	let roundResult = playRound(e.target.id, getComputerChoice());
	if (roundResult[4] === 'w') playerScore++;
	if (roundResult[4] === 'l') computerScore++;
	// result.textContent = roundResult + `\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
	//
	const winOrLose = document.createElement("p");
	winOrLose.textContent = roundResult;
	result.appendChild(winOrLose);

	const playerScoreboard = document.createElement("p");
	playerScoreboard.textContent = `Player: ${playerScore}`;
	result.appendChild(playerScoreboard);
	
	const computerScoreboard = document.createElement("p");
	computerScoreboard.textContent = `Computer: ${computerScore}`;
	result.appendChild(computerScoreboard);

	const finalVictor = document.createElement("p");
	if (playerScore === 5) {
		finalVictor.textContent = "Player wins!";
		result.appendChild(finalVictor);
	} else if (computerScore === 5) {
		finalVictor.textContent = "Computer wins!";
		result.appendChild(finalVictor);
	}
	//adding a reset button
	if (finalVictor.textContent) {
		const resetButton = document.createElement("button");
		resetButton.textContent = "Play Again";
		resetButton.addEventListener("click", () => {
			playerScore = 0;
			computerScore = 0;
			result.replaceChildren();
		});
		result.appendChild(resetButton);
	}
}

//Buttons 
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", handlePlayerInput);

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", handlePlayerInput);

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", handlePlayerInput);

