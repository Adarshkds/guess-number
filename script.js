'use strict';

// lets;
let score = 20;
let highScore = 0;
let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);

const message = document.querySelector(`.message`);

// code
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    message.textContent = `X No Input X`;
  } else if (guess == secretNum) {
    message.textContent = `You Won`;
    document.querySelector(`.number`).textContent = secretNum;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess > secretNum) {
    message.textContent = `Too high`;
    document.querySelector(`.score`).textContent = score--;
  } else if (guess < secretNum) {
    message.textContent = `Too low`;
  }
});
