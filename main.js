// Home
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset-btn");
let score = 0;

function scoreIncrementByOne() {
  score += 1;
  homeScore.textContent = score;
}
function scoreIncrementByTwo() {
  score += 2;
  homeScore.textContent = score;
}
function scoreIncrementByThree() {
  score += 3;
  homeScore.textContent = score;
}
// Home Score ends
// Guest Score Functions
function guestScoreIncrementByOne() {
  score += 1;
  guestScore.textContent = score;
}
function guestScoreIncrementByTwo() {
  score += 2;
  guestScore.textContent = score;
}
function guestScoreIncrementByThree() {
  score += 3;
  guestScore.textContent = score;
}
function resetScore() {
  score = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
