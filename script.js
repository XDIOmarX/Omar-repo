'use strict';

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = '13';

// document.querySelector('.score').textContent = '17';

// document.querySelector('.guess').value = '10';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// const generateRandom = function () {};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if number is out of range
  if (guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20 🙄';
  }
  //if guess is empty
  else if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔';
  }
  // if guess is correct
  else if (guess === secretNumber && score != 0) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.number').textContent = secretNumber;

    // score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if number different form secret number
  else if (guess !== secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High 📈' : 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
      document.querySelector('.message').textContent = 'Game over💥';
    }
  }

  // if guess is greater that the number
  // else if (guess > secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'Too High 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'Game over💥';
  //   }
  // }
  // // if guess is smaller than the number
  // else if (guess < secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'Too Low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   if (score === 0) {
  //     document.querySelector('.message').textContent = 'Game over💥';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  console.log(secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //document.querySelector('guess').textContent = 1;
});
