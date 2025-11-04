const playArea = document.getElementById("playArea");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const overlay = document.getElementById("overlay");
const finalScore = document.getElementById("finalScore");

let score = 0;
let timeLeft = 30;
let timer;
let spawnInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  overlay.classList.add("hidden");
  startBtn.disabled = true;

  timer = setInterval(updateTimer, 1000);
  spawnInterval = setInterval(spawnStar, 600);
}

function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  clearInterval(spawnInterval);
  startBtn.disabled = false;
  overlay.classList.remove("hidden");
  finalScore.textContent = score;
  playArea.innerHTML = "";
}

function spawnStar() {
  const star = document.createElement("span");
  star.textContent = "⭐";
  star.classList.add("star");

  const x = Math.random() * (playArea.clientWidth - 40);
  const y = Math.random() * (playArea.clientHeight - 40);
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  star.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    star.remove();
  });

  playArea.appendChild(star);

  // remove star after 1.5s
  setTimeout(() => {
    star.remove();
  }, 1500);
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
