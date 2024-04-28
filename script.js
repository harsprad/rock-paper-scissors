console.log("Hello World!");

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function getHumanChoice() {
	const choice = prompt("Type rock, paper or scissors", "").toLowerCase();
	if (choice === "rock" ||
		choice === "paper" ||
		choice === "scissors" ||
		choice === "cancel") {
		return choice;
	} else {
		alert( "Invalid input, try again, or type 'cancel' to exit." );
		return getHumanChoice();
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === "cancel") return -1;

	let gameResult; //0 = lose, 1 = tie, 2 = win

	if (humanChoice === "rock") {
		if (computerChoice === "rock") gameResult = 1; 
		if (computerChoice === "paper") gameResult = 0; 
		if (computerChoice === "scissors") gameResult = 2; 
	} else if (humanChoice === "paper") {
		if (computerChoice === "rock") gameResult = 2; 
		if (computerChoice === "paper") gameResult = 1; 
		if (computerChoice === "scissors") gameResult = 0; 
	} else if (humanChoice === "scissors") {
		if (computerChoice === "rock") gameResult = 0; 
		if (computerChoice === "paper") gameResult = 2; 
		if (computerChoice === "scissors") gameResult = 1; 
	}

	humanCapitalChoice = humanChoice.at(0).toUpperCase() + humanChoice.substring(1); 
	computerCapitalChoice = computerChoice.at(0).toUpperCase() + computerChoice.substring(1); 
	if (gameResult === 0) {
		console.log("You lose! " + computerCapitalChoice + " beats " + humanCapitalChoice);
	} else if (gameResult === 1) {
		console.log("You tie! " + computerCapitalChoice + " vs. " + humanCapitalChoice);
	} else {
		console.log("You win! " + humanCapitalChoice + " beats " + computerCapitalChoice);
	}
	
	return gameResult;
}


function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();

		let gameResult = playRound(humanSelection, computerSelection);

		if (gameResult === 0) { //lose
			++computerScore;
		} else if (gameResult === 2) { //win
			++humanScore;
		} else if (gameResult == -1) {//cancel
			break;
		}
	}
	
	console.log("The final score is:\n" + humanScore + " You\n" + computerScore + " Computer\nI hope you enjoyed.");
}
