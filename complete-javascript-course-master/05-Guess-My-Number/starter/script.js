'use strict';
// selecting and manipatuting items
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😊';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// handeling click events
// event liseners
const secretnumber = Math.Trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretnumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number!😊';
  } else if (guess > secretnumber) {
    document.querySelector('.message').textContent = '📈 too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = '📉 too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
