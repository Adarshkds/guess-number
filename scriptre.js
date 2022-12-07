'use strict';

let score = 20;
let highscore = 0;
let secretNum = Math.floor(Math.random() * 20) + 1;
// document.querySelector(`.number`).textContent = secretNum;
const message = function (message) {
  return (document.querySelector(`.message`).textContent = message);
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;
  if (!guess) {
    message(`❌ No Brainer ❌`);
  } else if (guess == secretNum) {
    message(`Big Brainz at work`);
    document.querySelector(`.number`).textContent = secretNum;
    document.querySelector(`.highscore`).textContent =
      score > highscore ? (highscore = score) : highscore;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess != secretNum) {
    message(guess > secretNum ? `Too High` : `Too Low`);
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      message(`You Lose`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  message(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.highscore`).textContent = highscore;
});
