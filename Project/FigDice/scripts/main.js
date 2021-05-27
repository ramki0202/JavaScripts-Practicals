"use strict";

//Model Window Start
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const overlay3 = document.querySelector(".overlay3");
const iButton = document.querySelector(".i-btn");
const closeBtn = document.querySelector(".close-modal");
iButton.addEventListener("click", function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Model Windown end

//FigDice Game
//variables diclaration
const player0Score = document.querySelector(".player0-CurrentScore");
const player1Score = document.querySelector(".player1-CurrentScore");
let playerbox1 = document.querySelector(".box1");
let playerbox2 = document.querySelector(".box2");
let scoreAddition = 0;
let playerbox = document.querySelector(".player--acitve");
const player0HighScore = document.querySelector(".player0-highscore");
const player2HighScore = document.querySelector(".player1-highscore");
let dices = document.querySelector(".dice");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
let score = [0, 0];
let activePlayer = 0;
const winMessage = document.querySelector(".Win");
const winClose = document.querySelector(".win-close-modal");
const playerNameInput1 = document.querySelector(".player1-name");
const playerNameInput2 = document.querySelector(".player2-name");
const playerName1 = document.querySelector(".player1");
const playerName2 = document.querySelector(".player2");
const playBtn = document.querySelector(".play-btn");
const playerGameBox = document.querySelector(".player-name");
// const diceEl = document.querySelector(".dice");

// let images = Math.trunc(Math.random() * 6) + 1;
playBtn.addEventListener("click", function () {
  playerName1.textContent = playerNameInput1.value;
  playerName2.textContent = playerNameInput2.value;
  playerGameBox.classList.toggle("hidden");
  overlay3.classList.toggle("hidden");
});

rollDice.addEventListener("click", function () {
  let index = Math.trunc(Math.random() * 6) + 1;
  dices.classList.remove("hidden");
  dices.src = `images/dice-${index}.png`;
  console.log(`dice-${index}.png`);

  if (index !== 1) {
    scoreAddition += index;
    document.querySelector(
      `.player${activePlayer}-CurrentScore`
    ).textContent = scoreAddition;
  } else {
    scoreAddition = 0;
    document.querySelector(
      `.player${activePlayer}-CurrentScore`
    ).textContent = 0;
    playerbox1.classList.toggle("player--acitve");
    playerbox2.classList.toggle("player--acitve");
    activePlayer = activePlayer == 0 ? 1 : 0;
  }
});

hold.addEventListener("click", function () {
  score[activePlayer] += scoreAddition;
  document.querySelector(`.player${activePlayer}-highscore`).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 100) {
    if (activePlayer == 0) {
      activePlayer = playerName1.textContent;
    } else {
      activePlayer = playerName2.textContent;
    }
    winMessage.textContent = `${activePlayer} Won the match`;
    winMessage.classList.remove("hidden");
    overlay2.classList.remove("hidden");
    newGame.classList.remove("hidden");
    /*  scoreAddition = 0;
    activePlayer = 0;
    playerbox1.classList.toggle("player--acitve");
    playerbox2.classList.toggle("player--acitve");
    document.querySelector(".player0-CurrentScore").textContent = 0;
    document.querySelector(".player1-CurrentScore").textContent = 0;
    document.querySelector(".player0-highscore").textContent = 0;
    document.querySelector(".player1-highscore").textContent = 0;*/
  } else {
    activePlayer = activePlayer == 0 ? 1 : 0;
    playerbox1.classList.toggle("player--acitve");
    playerbox2.classList.toggle("player--acitve");
    document.querySelector(
      `.player${activePlayer}-CurrentScore`
    ).textContent = 0;
    scoreAddition = 0;
  }
});

newGame.addEventListener("click", function () {
  winMessage.classList.add("hidden");
  overlay2.classList.add("hidden");
  newGame.classList.add("hidden");
  dices.classList.add("hidden");
  activePlayer = 0;
  scoreAddition = 0;
  score = [0, 0];
  playerbox1.classList.add("player--acitve");
  playerbox2.classList.remove("player--acitve");
  document.querySelector(".player0-CurrentScore").textContent = 0;
  document.querySelector(".player1-CurrentScore").textContent = 0;
  document.querySelector(".player0-highscore").textContent = 0;
  document.querySelector(".player1-highscore").textContent = 0;
});

// logics1(if the starting point is score will be 0 and dice is hidden)

//Problem Solving
/*

Task: 
    /// 1). When user click RollDice button he will get random dice image
    // 2). to assign the value of random dice in the current score
   // 3). to add the current score in the same window 
   // 4). if user get 1 value he will lose all his/her scores
  //  5). if user click the hold button, his current score will be store in highscore board
    6). so the trun will be change to another user same thing will happend for current user.
    7). when any user get greater than or equal to 100 he/she will be Winner
    8). when user click newgame all score will be zero.




*/
