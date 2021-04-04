'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number🙌';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const name = document.querySelector('.name').value;
  const ans = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = number;

  if (!ans || ans < 0) {
    document.querySelector(
      '.message'
    ).textContent = `Sorry ${name}  it's Not a numbe⛔`;
    document.querySelector('.number').textContent = ans;
    const original = (document.querySelector('.guess').value = ans);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    if (ans == number) {
      document.querySelector(
        '.message'
      ).textContent = `hi ${name}  You Entered Correct Number🙌`;
      document.querySelector('.number').textContent = ans;
    } else if (ans < number) {
      document.querySelector(
        '.message'
      ).textContent = `Sorry ${name}  You Entered too low😢`;
      document.querySelector('.number').textContent = ans;
      const original = (document.querySelector('.guess').value = ans);
      score--;
      document.querySelector('.score').textContent = score;
    } else if (ans > number) {
      document.querySelector(
        '.message'
      ).textContent = `Sorry ${name}  You Entered too High😢`;
      document.querySelector('.number').textContent = ans;
      const original = (document.querySelector('.guess').value = ans);
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
