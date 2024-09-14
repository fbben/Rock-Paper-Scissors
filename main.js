function getPlayerChoise() {
    let playerChoise = prompt("Choose:\n 0- Rock. \n 1- Paper. \n 2- Scissors.");
    playerChoise = +playerChoise; // Caracter to integer.
    while ((playerChoise != 0) && (playerChoise != 1) && (playerChoise != 2)) {
        console.log("Choose a valid choise!");
        playerChoise = prompt("Choose:\n 0- Rock. \n 1- Paper. \n 2- Scissors.");
        playerChoise = +playerChoise;
    }
    return playerChoise;
}

function getComputerChoise() {
    return Math.floor(Math.random() * 3); // Return an integer between 0 and 2.
}

function playRound(playerChoise, computerChoise) {
    let gameMatrix = [
        [-1, 0, 1],// Rock, Paper and Scissors of lines are for Player's choises, the columns ones are for Computer.  
        [1, -1, 0],// -1 means draw, 0 means player loses (e.g. in first line: player's rock loses to Computer's paper).
        [0, 1, -1],// 1 means player wins (Computer loses).
    ];
    result = gameMatrix[playerChoise][computerChoise];
    console.log(`Player chooses ${getChoise(playerChoise)}, Computer's choise: ${getChoise(computerChoise)}.`)
    switch (result) {
        case -1:
            console.log("Draw!");
            break;
        case 0:
            console.log("Computer wins the round!");
            break;
        case 1:
            console.log("Player wins the round!");
            break;
    }
    return result;
}

function getChoise(x) {
    switch (x) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissores";
            break;
    }
}

function playGame() {
    let playRounds = 0, playerScore = 0, computerScore = 0;
    while (playRounds < 5) {
        console.log(`--------- Round ${playRounds + 1} ---------`)
        let result = playRound(getPlayerChoise(), getComputerChoise());
        if (result == 1) playerScore++;
        else {
            if (result == 0)
                computerScore++;
        }
        playRounds++;
    }
    console.log("---------------------------")
    console.log(`Final Score: You: ${playerScore} - Computer: ${computerScore}`)
    if (playerScore > computerScore) console.log("You win the game!");
    else {
        if (playerScore < computerScore) console.log("Computer wins the game, you're looser!");
        else {
            console.log("Draw!");
        }
    }
}

playGame();

