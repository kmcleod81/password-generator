// Generate an array of possible options that could be included in the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

var choices = 0;

/// Start password generate
var genButton = document.getElementById("generate");
genButton.addEventListener("click", function () {
    var storedPassword = "";

    // Prompt the user for the length of password
    var length = prompt("Choose your Password Length", 8);

    // Prompt the user for what they want to include in their password
    var usespecialChar = confirm("Do you want Special Characters?");
    if (usespecialChar) {
        choices++;
    }

    // Prompt the user for what they want to include in their password
    var useupperCase = confirm("Do you want Uppercase Letters?");
    if (useupperCase) {
        choices++;
    }

    // Prompt the user for what they want to include in their password
    var usenumeric = confirm("Do you want Numbers?");
    if (usenumeric) {
        choices++;
    }

    // Prompt the user for what they want to include in their password
    var uselowerCase = confirm("Do you want Lowercase letter?");
    if (uselowerCase) {
        choices++;
    }

    var usedSC = false
    var usedU = false
    var usedN = false

    //in a loop, for the length of the password, pick a random item from the  possible options
    for (var i = 0; i < length; i++) {
        if (usespecialChar && usedSC === false) {
            usedSC = true;
            var randSC = Math.floor(Math.random() * specialChar.length);
            storedPassword = storedPassword + specialChar[randSC]
        } else if (useupperCase && usedU === false) {
            usedU = true;
            var randUpper = Math.floor(Math.random() * upperCase.length);
            storedPassword = storedPassword + upperCase[randUpper]
        } else if (usenumeric && usedN === false) {
            usedN = true;
            var randNumeric = Math.floor(Math.random() * numeric.length);
            storedPassword = storedPassword + numeric[randNumeric]
        } else if (uselowerCase) {
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



