'use strict';

// Every listener and content;
let number = document.querySelector(`.number`);
let guessJs = document.querySelector(`.guess`);
let scoreJs = document.querySelector(`.score`);
let highScoreJs = document.querySelector(`.highscore`);
let body = document.querySelector(`body`);

const display = function (message) {
  document.querySelector(`.message`).textContent = message;
};

/***keeping values in code***/

/*implementing secretNum*/
let secretNum = Math.round(Math.random() * 19) + 1;
console.log(secretNum);
/*let*/
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(guessJs.value);
  if (guess === secretNum) {
    display(`🎉You won`);
    number.textContent = secretNum;
    highScoreJs.textContent =
      score > highScore ? (highScore = score) : highScore;
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`;
  } else if (!guess) {
    display(`👀 Type a number 👀`);
  } else if (guess !== secretNum) {
    if (score > 1) {
      display(guess > secretNum ? `Too High` : `Too Low`);
      score--;
      scoreJs.textContent = score;
    } else {
      display(`⛔You lost`);
      scoreJs.textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNum = Math.round(Math.random() * 19) + 1;
  number.textContent = `?`;
  score = 20;
  console.log(secretNum);
  body.style.backgroundColor = `#222`;
  number.style.width = `15rem`;
  guessJs.value = ``;
  display(`Start guessing...`);
  scoreJs.textContent = score;
  highScoreJs.textContent = highScore;
});
