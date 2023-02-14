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


