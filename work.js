let userScore = 0;
let compScore = 0;
const userScoreDisplay = document.getElementById("userScore");
const compScoreDisplay = document.getElementById("compScore");
const resultText = document.getElementById("resultText");
const userChoiceText = document.getElementById("userChoice");
const compChoiceText = document.getElementById("compChoice");
const userImages = document.querySelectorAll(".player:first-child .choices img");
const compImages = document.querySelectorAll(".player:last-child .choices img");
let options = ["rock", "paper", "scissor"];
userImages.forEach(img => {
  img.onclick = () => {
    play(img.id);
  };
});
function play(userPick) {
  userImages.forEach(i => i.classList.remove("selected"));
  compImages.forEach(i => i.classList.remove("selected"));
  document.getElementById(userPick).classList.add("selected");
  userChoiceText.textContent = "You chose: " + userPick;
  let compPick = options[Math.floor(Math.random() * 3)];
  document.getElementById("c" + compPick).classList.add("selected");
  compChoiceText.textContent = "Computer chose: " + compPick;
  if (userPick === compPick) {
    resultText.textContent = "😄 It's a Tie!";
  } else if (
    (userPick === "rock" && compPick === "scissor") ||
    (userPick === "paper" && compPick === "rock") ||
    (userPick === "scissor" && compPick === "paper")
  ) {
    resultText.textContent = "🎉 You Win this round!";
    userScore++;
  } else {
    resultText.textContent = "😢 Computer Wins this round!";
    compScore++;
  }
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}
