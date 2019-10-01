'use strict';

var userName = prompt('What\'s your name?');

var myName = prompt('Hello ' + userName + '! ' + 'Is my name Karen?');
myName = myName.toLowerCase();

if (myName === 'no' || myName === 'n') {
  //console.log('No! My name is not Karen, it\'s Krystal.');
  alert('Correct! My name is not Karen, it\'s Krystal.');
} else {
  //console.log('No! My name is not Karen, it\'s Krystal.');
  alert('Nope! My name is not Karen, it\'s Krystal.');

}

var myCollege = prompt('Tell me ' + userName + ', ' + 'Was Oregon State University the last college I attended?');
myCollege = myCollege.toLowerCase();

if (myCollege === 'yes' || myCollege === 'y') {
  //console.log('Yes! OSU was the last college I attended. Go Beavs!');
  alert('Good guess! OSU was the last college I attended. Go Beavs!');
} else {
  //console.log('No! Oregon State University was the last college I attended.');
  alert('Wrong! Oregon State University was the last college I attended.');
}

var myCity = prompt('Hey ' + userName + ', ' + 'Guess this: Am I from New Jersey?');
myCity = myCity.toLowerCase();

if (myCity === 'yes' || myCity === 'y') {
  //console.log('No! I\'m not from Jersey, I\'m a New Yorker.');
  alert('Nope! I\'m not from Jersey, I\'m a New Yorker.');
} else {
  //console.log('Yes! That\'s correct. I\'m from New York, not New Jersey.');
  alert('Good call! I\'m from New York, not Jersey.');
}

var myFood = prompt('Do you think I enjoy eating eggplants?');
myFood = myFood.toLowerCase();

if (myFood === 'yes' || myFood === 'y') {
  //console.log('No. I don\'t like the texture of eggplants.');
  alert('No. I don\'t like the texture of eggplants.');
} else {
  //console.log('Yes. You\'re right. I don\'t like the texture of eggplants.');
  alert('Spot on. I don\'t like the texture of eggplants.');
}



alert('It was fun playing this game with you, ' + userName + '. ' + 'Enjoy reading my site!');
