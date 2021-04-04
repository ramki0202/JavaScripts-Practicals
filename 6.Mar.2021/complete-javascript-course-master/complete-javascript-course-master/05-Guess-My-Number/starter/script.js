'use strict';

//variables diclared
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number((document.querySelector('.score').textContent = 20));

//query selector function for check button
document.querySelector('.check').addEventListener('click', function () {
  const name = document.querySelector('.name').value;
  const ans = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = secretNumber;

  // if ans is 0 less than 0 is show not a number
  if (!ans || ans < 0) {
    // if score is less than 1 user will loss game
    if (score <= 1) {
      document.querySelector('.message').textContent = 'Game Over😞';
      document.querySelector('.number').textContent = ans;
      const original = (document.querySelector('.guess').value = ans);
      // if ans is 0 less than 0 is show not a number
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Sorry ${name}  it's Not a number⛔`;
      const original = (document.querySelector('.guess').value = ans);
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Main functionality working :if user enter low or high
  } else {
    if (ans == secretNumber) {
      document.querySelector(
        '.message'
      ).textContent = `hi ${name}  You Entered Correct Number🙌`;
      document.querySelector('.number').textContent = ans;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
    } else if (ans < secretNumber) {
      if (score <= 1) {
        document.querySelector('.message').textContent = 'Game Over😞';
        const original = (document.querySelector('.guess').value = ans);
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Sorry ${name}  You Entered too low😢`;
        const original = (document.querySelector('.guess').value = ans);
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else if (ans > secretNumber) {
      if (score <= 1) {
        document.querySelector('.message').textContent = 'Game Over😞';
        const original = (document.querySelector('.guess').value = ans);
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Sorry ${name}  You Entered too High😢`;

        const original = (document.querySelector('.guess').value = ans);
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = Number((document.querySelector('.score').textContent = 20));
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.name').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
