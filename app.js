let userScore = 0;
let computerScore = 0;
let draws = 0;

const drawsPara = document.getElementById("draws");
const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("computer-score");
const resultDiv = document.querySelector("#message");
const resetButton = document.getElementById("reset-button");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

const getCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return option[randomNumber];
};

const convertToUp = (word) => {
  switch (word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
  }
};

const win = (userChoice, compChoice) => {
    userScore++;
    userScorePara.innerText = userScore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomNumber = Math.floor(Math.random() * 4);
    const winEmojis = ["🤠", "🎉", "✨", "🎊", "🤩", "👌"];
    const randomNumberEmoji = Math.floor(Math.random() * 6);

    resultDiv.innerText = `${convertToUp(userChoice)} ${randomWin[randomNumber]} ${convertToUp(compChoice)}. You win! ${winEmojis[randomNumberEmoji]}`;

    document.getElementById(userChoice).classList.add("win-border");
    setTimeout(() => document.getElementById(userChoice).classList.remove("win-border"), 600);
};

const lose = (userChoice, compChoice) => {
    computerScore++;
    computerScorePara.innerHTML = computerScore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomNumber = Math.floor(Math.random() * 4);
    const loseEmojis = ["😩", "😥 ", "😭", "😵‍💫", "😔", "🤦🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    resultDiv.innerHTML = `${convertToUp(compChoice)} ${randomWin[randomNumber]} ${convertToUp(userChoice)}. You lose! ${loseEmojis[randomNumberEmoji]}`;

    document.getElementById(userChoice).classList.add('lose-border');
    setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);

};

const tie = (userChoice, compChoice) => {
    draws++;
    drawsPara.innerHTML = draws;
    const tieEmojis = ["🤔", " 😱", "🙈", "🧐", "🙀", "🙃"];
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    resultDiv.innerHTML = `${convertToUp(compChoice)} matches ${convertToUp(userChoice)}. It's a tie! ${tieEmojis[randomNumberEmoji]}`;

    document.getElementById(userChoice).classList.add('tie-border');
    setTimeout(() => document.getElementById(userChoice).classList.remove('tie-border'), 600);
};

const game = (userChoice) => {
    const compChoice = getCompChoice();

    switch (userChoice + compChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, compChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, compChoice);
            break;
    }

};

const resetScores = () => {
    computerScore = 0;
    computerScorePara.innerHTML = computerScore
    userScore = 0;
    userScorePara.innerHTML = userScore;
    draws = 0;
    drawsPara.innerHTML = draws;
    resultDiv.innerHTML = 'Who will win this match ?';
};

const main = () => {
    rockDiv.addEventListener('click', () => game("rock"));

    paperDiv.addEventListener('click', () => game("paper"));

    scissorsDiv.addEventListener('click', () => game("scissors"));

    resetButton.addEventListener('click', () => resetScores());
};

main();