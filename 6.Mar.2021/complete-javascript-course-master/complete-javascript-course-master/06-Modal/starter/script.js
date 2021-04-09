'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.close-modal');
const modalShowBtn = document.querySelectorAll('.show-modal');

for (let i = 0; i < modalShowBtn.length; i++) {
  modalShowBtn[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

modalCloseBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
