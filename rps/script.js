const getComputerChoice = function() {
    const value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return "rock";
    } else if (value === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

const getHumanChoice = function() {
    let sign = prompt("Select rock, paper or scissors", "rock").toLowerCase();

    while ((sign !== "rock") && (sign !== "paper") && (sign !== "scissors")) {
        sign = prompt("Yo what did I ask? Rock, paper or scissors. Come on it's not that difficult!", "rock").toLowerCase();
    }

    return sign;
}

const playRound = function(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    if (((humanChoice === "rock") && (computerChoice === "paper")) ||
            ((humanChoice === "paper") && (computerChoice === "scissors")) ||
            ((humanChoice === "scissors") && (computerChoice === "rock"))) {
        computerScore++;
        alert(`You: ${humanChoice} - Computer: ${computerChoice}\nComputer won 😢`);
    } else if (((humanChoice === "rock") && (computerChoice === "scissors")) ||
            ((humanChoice === "paper") && (computerChoice === "rock")) ||
            ((humanChoice === "scissors") && (computerChoice === "paper"))) {
        humanScore++;
        alert(`You: ${humanChoice} - Computer: ${computerChoice}\nYou won 😄`);
    } else {
        alert(`You: ${humanChoice} - Computer: ${computerChoice}\nThat's a tie!`);
    }

    return [humanScore, computerScore]
}

const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        humanScore += result[0];
        computerScore += result[1];
    }

    if(humanScore > computerScore) {
        alert(`Final result: You: ${humanScore} - Computer: ${computerScore}\nCongratulation, you won 🥳`);
    } else if (computerScore > humanScore) {
        alert(`Final result: You: ${humanScore} - Computer: ${computerScore}\nTry again next time 😵`);
    } else {
        alert(`Final result: You: ${humanScore} - Computer: ${computerScore}\nPerfectly balanced, as all things should be!`);
    }
}

playGame();