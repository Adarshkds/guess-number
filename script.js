'use strict';

// Starters
let score = 20;
let highScore = 0;
let secretNum = Math.floor(Math.random() * 20) + 1;

const message = document.querySelector(`.message`);

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`guess`).value;
  if (!guess) {
    document.querySelector(`.message`).textContent = `X No Input X`;
  } else if (guess == secretNum) {
    message.textContent = `You Won`;
  }
});
