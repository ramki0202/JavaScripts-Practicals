'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const name = document.querySelector('.name').value;
  const ans = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = number;

  if (!ans || ans < 0) {
    if (score <= 1) {
      document.querySelector('.message').textContent = 'Game Over😞';
      document.querySelector('.number').textContent = ans;
      const original = (document.querySelector('.guess').value = ans);
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Sorry ${name}  it's Not a numbe⛔`;
      document.querySelector('.number').textContent = ans;
      const original = (document.querySelector('.guess').value = ans);
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (ans == number) {
      document.querySelector(
        '.message'
      ).textContent = `hi ${name}  You Entered Correct Number🙌`;
      document.querySelector('.number').textContent = ans;
    } else if (ans < number) {
      if (score <= 1) {
        document.querySelector('.message').textContent = 'Game Over😞';
        document.querySelector('.number').textContent = ans;
        const original = (document.querySelector('.guess').value = ans);
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Sorry ${name}  You Entered too low😢`;
        document.querySelector('.number').textContent = ans;
        const original = (document.querySelector('.guess').value = ans);
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else if (ans > number) {
      if (score <= 1) {
        document.querySelector('.message').textContent = 'Game Over😞';
        document.querySelector('.number').textContent = ans;
        const original = (document.querySelector('.guess').value = ans);
      } else {
        document.querySelector(
          '.message'
        ).textContent = `Sorry ${name}  You Entered too High😢`;
        document.querySelector('.number').textContent = ans;
        const original = (document.querySelector('.guess').value = ans);
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});
