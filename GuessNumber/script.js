'use strict'; // JavaScript's strict mode is a way to opt in to a restricted variant of Javascript, thereby implicitly opting out of "sloppy mode"

// DOM : Document Object Model:
// Structured representation of HTML  document, allows
// javascript to access html element and styles to manipulate them.
// It is not part of JavaScript language, but it is instead a Web API used to build websites.
// It was designed to be independent of any particular programming language, making the structural representation of document available from a single consistent API.

let guessnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = guessnumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // document.querySelector('.number').textContent = guessnumber;
  // if (guess) {
  //   document.querySelector('.number').textContent = guessnumber;
  // }
  if (!guess) {
    displayMessage('⛔️ No number!');
  }

  // when it is correct
  else if (guess === guessnumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = guessnumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess != guessnumber) {
    if (score > 1) {
      displayMessage(guess > guessnumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  guessnumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
// The Javascript addEventListener() method allows to set up functions to be called when a specific event happens such as when a user clicks a button
