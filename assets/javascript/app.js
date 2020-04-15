// Capture the choices
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

//prompt the user for the length of password
//prompt the user for what they want to inclde in their password
//generate an array of possible options that could be included in the password
//in a loop, for the length of te password, pick a random item from the  possible options

// Display the results to the user



var randLower = Math.floor(Math.random() * lowerCase.length);
var randUpper = Math.floor(Math.random() * upperCase.length);
var randNumeric = Math.floor(Math.random() * numeric.length);
var randSC = Math.floor(Math.random() * specialChar.length);




console.log(items[randLower, randUpper, randNumeric, randSC]);