// Capture the choices
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

///start password generate
var genButton = document.getElementById("generate");
genButton.addEventListener("click", function () {
    var storedPassword = "";
    var length = prompt("Choose your Password Length", 8);
    var usespecialChar = confirm("Do you want Special Characters?");
    // var randLower = Math.floor(Math.random() * lowerCase.length);
    var randUpper = Math.floor(Math.random() * upperCase.length);
    var randNumeric = Math.floor(Math.random() * numeric.length);
    var randSC = Math.floor(Math.random() * specialChar.length);
    for (var i = 0; i < length; i++) {
        if (usespecialChar && i === 4) {
            var randSC = Math.floor(Math.random() * specialChar.length);
            storedPassword = storedPassword + specialChar[randSC]
        } else {
            var randLower = Math.floor(Math.random() * lowerCase.length);
            storedPassword = storedPassword + lowerCase[randLower]
        }
    };
    var passwordElement = document.getElementById("password");
    passwordElement.value = storedPassword;
})
//prompt the user for the length of password


//prompt the user for what they want to inclde in their password

//generate an array of possible options that could be included in the password
//in a loop, for the length of te password, pick a random item from the  possible options

// Display the results to the user


// console.log(lowerCase[randLower]);