function angelRockPaperScissors(playerTurn1) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    let playerTurn = playerTurn1[0];

    if (playerTurn === "r" || playerTurn === "rock") {
        playerTurn = rock;
        console.log("Player choose rock");
    } else if (playerTurn === "p" || playerTurn === "paper") {
        playerTurn = paper;
        console.log("Player choose paper");
    } else if (playerTurn === "s" || playerTurn === "scissors") {
        playerTurn = scissors;
        console.log("Player choose scissors");
    } else {
        console.log("Invalid input")
    }

    let computerRandom = Math.floor(Math.random() * 3) + 1;
    let computerMove;

    switch(computerRandom){
        case 1: computerMove = rock; break;
        case 2: computerMove = paper; break;
        case 3: computerMove = scissors; break;
    }

    console.log(`The computer chooses ${computerMove}`);

    if ((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) 
    || (playerTurn === scissors && computerMove === paper) ){
        console.log("YOU WIN");
    } else if ((computerMove === rock && playerTurn === scissors) || (computerMove === paper && playerTurn === rock) 
    || (computerMove === scissors && playerTurn === paper)){
        console.log("YOU LOSE");
    } else {
        console.log("DRAW");
    }
}
angelRockPaperScissors("rock")
