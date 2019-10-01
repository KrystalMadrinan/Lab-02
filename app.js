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


alert('It was fun playing this game with you, ' + userName + '. ' + 'Enjoy reading my site!');
