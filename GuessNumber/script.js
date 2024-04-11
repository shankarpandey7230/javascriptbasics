'use strict'; // JavaScript's strict mode is a way to opt in to a restricted variant of Javascript, thereby implicitly opting out of "sloppy mode"

// DOM : Document Object Model:
// Structured representation of HTML  document, allows
// javascript to access html element and styles to manipulate them.
// It is not part of JavaScript language, but it is instead a Web API used to build websites.
// It was designed to be independent of any particular programming language, making the structural representation of document available from a single consistent API.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});

// The Javascript addEventListener() method allows to set up functions to be called when a specific event happens such as when a user clicks a button
