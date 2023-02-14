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

const victories = [["Paper", "Rock"], ["Scissors", "Paper"], ["Rock", "Scissors"]];

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase(); //I hope this works
	console.log(playerSelection);
	if (victories.includes([playerSelection, computerSelection])) {
		return `You win! ${playerSelection} beats ${computerSelection}`;	
	} else if (victories.includes([computerSelection, playerSelection])) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else {
		return `It's a tie! Both players have chosen ${playerSelection}`;
	}
}
