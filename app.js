'use strict';

var userName = prompt('What\'s your name?');

var myName = prompt('Hello ' + userName + '! ' + 'Is my name Karen?');
myName = myName.toLowerCase();

var rightAnswerCount = 0;

if (myName === 'no' || myName === 'n') {
  //console.log('myName: ' + myName);
  alert('Correct! My name is not Karen, it\'s Krystal.');
  rightAnswerCount++;
} else {
  alert('Nope! My name is not Karen, it\'s Krystal.');
}

var myCollege = prompt('Tell me ' + userName + ', ' + 'Was Oregon State University the last college I attended?');
myCollege = myCollege.toLowerCase();

if (myCollege === 'yes' || myCollege === 'y') {
  //console.log('myCollege: ' + myCollege);
  alert('Good guess! OSU was the last college I attended. Go Beavs!');
} else {
  alert('Wrong! Oregon State University was the last college I attended.');
}

var myCity = prompt('Hey ' + userName + ', ' + 'Guess this: Am I from New Jersey?');
myCity = myCity.toLowerCase();

if (myCity === 'yes' || myCity === 'y') {
  //console.log('myCity: ' + myCity);
  alert('Nope! I\'m not from Jersey, I\'m a New Yorker.');
} else {
  alert('Good call! I\'m from New York, not Jersey.');
}

var myFood = prompt('Do you think I enjoy eating eggplants?');
myFood = myFood.toLowerCase();

if (myFood === 'yes' || myFood === 'y') {
  //console.log('myFood: ' + myFood);
  alert('No. I don\'t like the texture of eggplants.');
} else {
  alert('Spot on. I don\'t like the texture of eggplants.');
}

var myLastJob = prompt('Hey ' + userName + ', ' + 'Have I ever worked as a waitres?');
myLastJob = myLastJob.toLowerCase();

if (myLastJob === 'yes' || myLastJob === 'y') {
  //console.log('myLastJob: ' + myLastJob);
  alert('Yes! My last job was working as a waitress.');
} else {
  alert('Not quite! My last job was definitely working as a waitress.');
}




for (var i = 0; i < 4; i++) {
  var myAge = prompt('How old am I?');
  myAge = parseInt(myAge);
  //console.log('myAge: ' + myAge);
  if (myAge === 23) {
    alert('That\'s correct! I\'m 23 years old.');
    break; 
  } else if (myAge < 23) {
    alert('That\'s too low. Guess again.');
  } else {
    alert('That\'s too high. Try again.');
  }
}













var livedCities = prompt('Finally, which cities have I lived in? Guess one!');






alert('It was fun playing this game with you, ' + userName + '. ' + 'Enjoy reading my site!');
