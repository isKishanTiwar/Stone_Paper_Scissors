let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame =(userChoice) => {
    console.log("game was draw.")
    msg.innerText = `Game Draw!`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //Generate Computer choice  -> modular way 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice === compChoice){
        // Draw Game
        drawGame();
    } else {
    let userWin = true;
    if(userchoice === "rock"){
        // scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userchoice === "paper") {
        // rock, scissors
       userWin = compChoice === "scissors" ? false : true;
    } else {
        //rock,paper
        compChoice ==="rcok" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const restartBtn = document.querySelector("#restart-btn");

// Add an event listener to the button
restartBtn.addEventListener("click", () => {
    // Reset the scores
    userScore = 0;
    compScore = 0;

    // Update the score display
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    // Clear the message
    msg.innerText = "";
    msg.style.backgroundColor = "#081b31";
});