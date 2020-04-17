// Generate an array of possible options that could be included in the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

/// Start password generate
var genButton = document.getElementById("generate");
genButton.addEventListener("click", function () {
    var storedPassword = "";

    // Prompt the user for the length of password
    var length = prompt("Choose your Password Length", 8);

    // Prompt the user for what they want to inclde in their password
    var usespecialChar = confirm("Do you want Special Characters?");
    var usenum = confirm("Do you want Numbers?");

    var randUpper = Math.floor(Math.random() * upperCase.length);

    //in a loop, for the length of te password, pick a random item from the  possible options
    for (var i = 0; i < length; i++) {
        if (usespecialChar && i === 2) {
            var randSC = Math.floor(Math.random() * specialChar.length);
            storedPassword = storedPassword + specialChar[randSC]
        } else {
            var randLower = Math.floor(Math.random() * lowerCase.length);
            storedPassword = storedPassword + lowerCase[randLower]
        }
    };


    // Display the results to the user
    var passwordElement = document.getElementById("password");
    passwordElement.value = storedPassword;
})
















// Generate an array of possible options that could be included in the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];


/// Start password generate
var genButton = document.getElementById("generate");
genButton.addEventListener("click", function () {
    var storedPassword = "";

    // Prompt the user for the length of password
    var length = prompt("Choose your Password Length", 8);

    // Prompt the user for what they want to include in their password
    var usespecialChar = confirm("Do you want Special Characters?");

    // Prompt the user for what they want to include in their password
    var useupperCase = confirm("Do you want Uppercase Letters?");

    // Prompt the user for what they want to include in their password
    var usenumeric = confirm("Do you want Numbers?");

    // Prompt the user for what they want to include in their password
    var uselowerCase = confirm("Do you want Lowercase letter?");

    var usedSC = false
    var usedU = false
    var usedN = false

    //in a loop, for the length of the password, pick a random item from the  possible options
    for (var i = 0; i < length; i++) {
        if (usespecialChar && usedSC === false) {
            usedSC = true;
            usedU = false;
            usedN = false;
            var randSC = Math.floor(Math.random() * specialChar.length);
            storedPassword = storedPassword + specialChar[randSC]
        } else if (useupperCase && usedU === false) {
            if (!usenumeric) usedSC = false;
            usedU = true;
            usedN = false;
            var randUpper = Math.floor(Math.random() * upperCase.length);
            storedPassword = storedPassword + upperCase[randUpper]
        } else if (usenumeric && usedN === false) {
            if (!uselowerCase) usedSC = false;
            usedN = true;
            usedU = false;
            var randNumeric = Math.floor(Math.random() * numeric.length);
            storedPassword = storedPassword + numeric[randNumeric]
        } else if (uselowerCase) {
            usedSC = false;
            usedU = false;
            usedN = false;
            var randLower = Math.floor(Math.random() * lowerCase.length);
            storedPassword = storedPassword + lowerCase[randLower]
        } else {
            usedSC = false; usedU = false; usedN = false;
        }
    };
    // Display the results to the user
    var passwordElement = document.getElementById("password");
    passwordElement.value = storedPassword;
})



