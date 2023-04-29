// Home
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset-btn");
let scoreHome = 0;
let scoreGuest = 0;

function scoreIncrementByOne() {
  scoreHome += 1;
  homeScore.textContent = scoreHome;
}
function scoreIncrementByTwo() {
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}
function scoreIncrementByThree() {
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}
// Home Score ends
// Guest Score Functions
function guestScoreIncrementByOne() {
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}
function guestScoreIncrementByTwo() {
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}
function guestScoreIncrementByThree() {
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}
function resetScore() {
  scoreHome = 0;
  scoreGuest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
