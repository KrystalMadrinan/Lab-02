'use strict';

var userName = prompt('What\'s your name?');
var rightAnswerCount = 0;
function guessName() {
  var myName = prompt('Hello ' + userName + '! ' + 'Is my name Karen?');
  myName = myName.toLowerCase();
  if (myName === 'no' || myName === 'n') {
    //console.log('myName: ' + myName);
    alert('Correct! My name is not Karen, it\'s Krystal.');
    rightAnswerCount++;
  } else {
    alert('Nope! My name is not Karen, it\'s Krystal.');
  }

}
guessName();

function guessCollege() {

  var myCollege = prompt('Tell me ' + userName + ', ' + 'Was Oregon State University the last college I attended?');
  myCollege = myCollege.toLowerCase();

  if (myCollege === 'yes' || myCollege === 'y') {
    //console.log('myCollege: ' + myCollege);
    alert('Good guess! OSU was the last college I attended. Go Beavs!');
    rightAnswerCount++;
  } else {
    alert('Wrong! Oregon State University was the last college I attended.');
  }

}
guessCollege();

function guessCity() {
  var myCity = prompt('Hey ' + userName + ', ' + 'Guess this: Am I from New Jersey?');
  myCity = myCity.toLowerCase(); 5;

  if (myCity === 'yes' || myCity === 'y') {
    //console.log('myCity: ' + myCity);
    alert('Nope! I\'m not from Jersey, I\'m a New Yorker.');
  } else {
    alert('Good call! I\'m from New York, not Jersey.');
    rightAnswerCount++;
  }
}
guessCity();

function guessFood() {
  var myFood = prompt('Do you think I enjoy eating eggplants?');
  myFood = myFood.toLowerCase();

  if (myFood === 'yes' || myFood === 'y') {
    //console.log('myFood: ' + myFood);
    alert('No. I don\'t like the texture of eggplants.');
  } else {
    alert('Spot on. I don\'t like the texture of eggplants.');
    rightAnswerCount++;
  }
}
guessFood();

function guessJob() {
  var myLastJob = prompt('Hey ' + userName + ', ' + 'Have I ever worked as a waitres?');
  myLastJob = myLastJob.toLowerCase();

  if (myLastJob === 'yes' || myLastJob === 'y') {
    //console.log('myLastJob: ' + myLastJob);
    alert('Yes! My last job was working as a waitress.');
    rightAnswerCount++;
  } else {
    alert('Not quite! My last job was definitely working as a waitress.');
  }
}
guessJob();

function guessMyAge() {
  for (var i = 0; i < 4; i++) {
    var myAge = prompt('How old am I?');
    myAge = parseInt(myAge);
    //console.log('myAge: ' + myAge);
    if (myAge === 23) {
      alert('That\'s correct! I\'m 23 years old.');
      rightAnswerCount++;
      break;
    } else if (myAge < 23) {
      alert('That\'s too low. Guess again.');
    } else if (myAge > 23) {
      alert('That\'s too high. Try again.');
    }
  }
}
guessMyAge();

function guessCities() {
  var livedCities = ['jamaica', 'hollis', 'portland', 'corvallis', 'seattle'];
  for (var k = 0; k < 5; k++) {
    var livedCitiesGuess = prompt('Finally, which cities have I lived in? Guess one!');
    //console.log('livedCitiesGuess: ' + livedCitiesGuess);
    if (livedCities.includes(livedCitiesGuess)) {
      alert('Good guess! I have lived in ' + livedCitiesGuess);
      rightAnswerCount++;
      break;
    } else {
      alert('Wrong. Guess another city.');
    }
  }
}
guessCities();
alert('Congrats (or not)!' + userName + 'You got ' + rightAnswerCount + ' out of 7 correct.');
alert('It was fun playing this game with you. ' + userName + 'Enjoy reading my site!');
