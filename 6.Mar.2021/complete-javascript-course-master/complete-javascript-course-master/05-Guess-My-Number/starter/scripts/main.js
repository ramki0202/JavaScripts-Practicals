"use strict";

//variable declaration
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let userScore = Number((document.querySelector(".score").textContent = 5));
let highScore = 0;

//We gona trigger check button
document.querySelector(".check").addEventListener("click", function () {
  let userName = document.querySelector(".userName").value;
  let userGuess = Number(document.querySelector(".guess").value);
  if (!userGuess || userGuess < 0 || userGuess > 50) {
    if (userScore <= 0) {
      document.querySelector(".message").style.fontSize = "30px";
      document.querySelector(".message").textContent = `Game Over🎮`;
      document.querySelector(".start-guess").src = "images/tired.gif";
      document.querySelector("body").style.backgroundColor = "rgb(238, 77, 77)";
      document.querySelector(".reset").style.backgroundColor = "#60b347";
    } else {
      document.querySelector(
        ".message"
      ).textContent = `hi ${userName} it's Not a Guess⛔`;
      document.querySelector(".start-guess").src = "images/feel.gif";
      userScore--;
      document.querySelector(".score").textContent = userScore;
    }
  } else {
    if (userGuess === secretNumber) {
      document.querySelector(
        ".message"
      ).textContent = `hi ${userName} Your Guess is Correct.!🥇`;
      document.querySelector(".message").style.fontSize = "26px";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".start-guess").src = "images/claps.gif";
      document.querySelector("body").style.backgroundColor = "#60b347";
      if (userScore > highScore) {
        highScore = userScore;
        document.querySelector(".highscore").textContent = highScore;
      }

      if (userScore > highscore) {
        highscore = userScore;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (userGuess < secretNumber) {
      if (userScore <= 1) {
        document.querySelector(".message").style.fontSize = "30px";
        document.querySelector(".message").textContent = `Game Over🎮`;
        document.querySelector(".start-guess").src = "images/tired.gif";
        document.querySelector("body").style.backgroundColor =
          "rgb(238, 77, 77)";
        document.querySelector(".reset").style.backgroundColor = "#60b347";
      } else {
        document.querySelector(
          ".message"
        ).textContent = `hi ${userName} Your Guess is Too Low..!📉`;
        document.querySelector(".start-guess").src = "images/sad.gif";
        userScore--;
        document.querySelector(".score").textContent = userScore;
      }
    } else if (userGuess > secretNumber) {
      if (userScore <= 1) {
        document.querySelector(".message").style.fontSize = "30px";
        document.querySelector(".message").textContent = `Game Over🎮`;
        document.querySelector(".start-guess").src = "images/tired.gif";
        document.querySelector("body").style.backgroundColor =
          "rgb(238, 77, 77)";
        document.querySelector(".reset").style.backgroundColor = "#60b347";
      } else {
        document.querySelector(
          ".message"
        ).textContent = `hi ${userName} Your Guess is Too High..!📈`;
        document.querySelector(".start-guess").src = "images/sad.gif";
        userScore--;
        document.querySelector(".score").textContent = userScore;
      }
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".start-guess").src = "images/guess.gif";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".guess").value = " ";
  document.querySelector(".reset").style.backgroundColor = "rgb(216, 20, 20)";
  document.querySelector(".message").style.fontSize = "16px";
  userScore = Number((document.querySelector(".score").textContent = 5));
  userName = document.querySelector(".userName").value = " ";
});
