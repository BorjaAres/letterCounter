// Prompt the user to enter a phrase
let phrase = prompt("Enter a phrase");

// Prompt the user to enter a single letter
let letter = prompt("Enter a single letter");

// Calculate the number of occurrences of the letter in the phrase
document.getElementById('myDiv1').innerHTML = (phrase.split(letter).length - 1);
