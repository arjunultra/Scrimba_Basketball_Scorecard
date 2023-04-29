// Home
let homePlusOne = document.getElementById("btn-plus-one");
let homeScore = document.getElementById("home-score");
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
