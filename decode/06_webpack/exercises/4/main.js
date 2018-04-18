var oneLinerJoke = require('one-liner-joke');

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('animal');

console.log(getRandomJokeWithTag);
var divvy = document.getElementById('divvy');
divvy.innerText = getRandomJokeWithTag.body;