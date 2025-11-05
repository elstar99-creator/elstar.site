// Ambil elemen
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
  if (gameRunning) return;
  gameRunning = true;
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  overlay.classList.add("hidden");

  spawnStars();
  timer = setInterval(updateTimer, 1000);
  spawnInterval = setInterval(spawnStars, 800);
}

// Fungsi spawn bintang
function spawnStars() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.textContent = "⭐";
  star.style.left = Math.random() * 90 + "%";
  star.style.top = Math.random() * 90 + "%";
  playArea.appendChild(star);

  star.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    star.remove();
  });

  setTimeout(() => {
    star.remove();
  }, 1500);
}

// Fungsi waktu
function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame();
  }
}

// Fungsi akhir game
function endGame() {
  clearInterval(timer);
  clearInterval(spawnInterval);
  overlay.classList.remove("hidden");
  finalScore.textContent = score;
  gameRunning = false;
}

// Tombol event
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  startGame();
});

// Supaya bintang nggak blur di HP
playArea.style.transform = "translateZ(0)";
