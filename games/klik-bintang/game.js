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

// Fungsi mulai game
function startGame() {
  clearInterval(timer);
  clearInterval(spawnInterval);

  overlay.classList.add("hidden");
  overlay.style.display = "none"; // tambahan fix utama
  playArea.innerHTML = "";
  score = 0;
  timeLeft = 30;
  gameRunning = true;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  spawnStars();
  timer = setInterval(updateTimer, 1000);
  spawnInterval = setInterval(spawnStars, 800);
}

// Fungsi munculkan bintang
function spawnStars() {
  if (!gameRunning) return;

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

// Fungsi update waktu
function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) endGame();
}

// Fungsi akhir game
function endGame() {
  gameRunning = false;
  clearInterval(timer);
  clearInterval(spawnInterval);
  finalScore.textContent = score;
  overlay.style.display = "flex";
  overlay.classList.remove("hidden");
}

// Tombol event
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

// Supaya tampilan bintang tidak blur di HP
playArea.style.transform = "translateZ(0)";
