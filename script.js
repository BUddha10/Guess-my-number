'use strict';

// generate randon numbers from
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  // Take input value
  const guess = Number(document.querySelector('.guess').value);

  // check if input value exist
  if (!guess) {
    displayMessage('No Number !');
  }
  // if guess number matches with secret number
  else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // if guess number doesn't match with secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      displayMessage('Your lost the game !');
      document.querySelector('.score').textContent = score;
    }
  }
});

// play the game again
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...!');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
