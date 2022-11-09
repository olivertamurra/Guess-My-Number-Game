'use strict';

const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);
  // when there is no input
  if (!guess) {
    messageEl.textContent = 'No number!';
  }
  // when you win
  else if (guess === secretNumber) {
    messageEl.textContent = 'Correct Number';
    scoreEl.textContent = score;

    document.body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when is to height
  else if (guess > secretNumber) {
    if (score > 0) {
      messageEl.textContent = 'Is too high!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'you lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      messageEl.textContent = 'Is too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'you lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
});
