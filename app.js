'use strict';

var userName = prompt('What\'s your name?');

var myName = prompt('Hello ' + userName + '! ' + 'Is my name Karen?')
myName = myName.toLowerCase();

if (myName === 'no') {
  alert('Correct! My name is not Karen, it\'s Krystal.');
} else {
  alert('No! My name is not Karen, it\'s Krystal.');
}


