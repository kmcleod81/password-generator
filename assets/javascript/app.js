// Generate an array of possible options that could be included in the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

var array = [lowerCase, upperCase, numeric, specialChar];


/// Start password generate
var genButton = document.getElementById("generate");
genButton.addEventListener("click", function () {
    var storedPassword = "";

    // Prompt the user for the length of password
    var length = 8;
    var warning = "";
    for (var i = 0; i < 1; i++) {
        length = prompt(warning + "Choose your Password Length", 8);
        warning = "Invalid length. ";
        if (length < 8 || length > 128) {
            i--;
        }
    }

    // Prompt the user for what they want to include in their password
    var usespecialChar = confirm("Do you want Special Characters?");


    // Prompt the user for what they want to include in their password
    var useupperCase = confirm("Do you want Uppercase Letters?");


    // Prompt the user for what they want to include in their password
    var usenumeric = confirm("Do you want Numbers?");


    // Prompt the user for what they want to include in their password
    var uselowerCase = confirm("Do you want Lowercase letter?");

    var usedSC = false;
    var usedU = false;
    var usedN = false;


    ///check to make sure they answered yes to at least one of the questions








    //in a loop, for the length of the password, pick a random item from the  possible options
    for (var i = 0; i < length; i++) {

        var nextArrayPosition = Math.floor(Math.random() * array.length);
        if ((nextArrayPosition === 0 && uselowerCase) ||
            (nextArrayPosition === 1 && useupperCase) ||
            (nextArrayPosition === 2 && usenumeric) ||
            (nextArrayPosition === 3 && usespecialChar)) {

            var selectedArray = array[nextArrayPosition];
            var randCharacterPosition = Math.floor(Math.random() * selectedArray.length);
            storedPassword = storedPassword + selectedArray[randCharacterPosition];
        } else {
            i--;
        }
    };
    // Display the results to the user
    var passwordElement = document.getElementById("password");
    passwordElement.innerHTML = storedPassword;
})



