'use strict';

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const score1 = document.querySelector('#score-0');
const score2 = document.querySelector('#score-1');
const current1 = document.querySelector('#current-0');
const current2 = document.querySelector('#current-1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// console.log(player1, player2);

let scores, currentScore, activePlayer, playing;

// starting conditions

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  diceEl.classList.add('hidden');
};
init();
