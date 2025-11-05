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
let gameRunning = false;

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  overlay.classList.add("hidden");

  spawnStars();
  timer = setInterval(updateTimer, 1000);
  spawnInterval = setInterval(spawnStars, 700);
}

function spawnStars() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.textContent = "⭐";
  star.style.left = Math.random() * 90 + "%";
  star.style.top = Math.random() * 90 + "%";
  playArea.appendChild(star);

  star.addEventListener("click", () => {
    if (!gameRunning) return;
    score++;
    scoreDisplay.textContent = score;
    star.remove();
  });

  setTimeout(() => {
    if (star.parentElement) star.remove();
  }, 1500);
}

function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) endGame();
}

function endGame() {
  gameRunning = false;
  clearInterval(timer);
  clearInterval(spawnInterval);
  overlay.classList.remove("hidden");
  finalScore.textContent = score;
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
playArea.style.transform = "translateZ(0)";
