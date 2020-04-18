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
    ///check to make sure they answered yes to at least one of the questions
    for (var i = 0; i < 1; i++) {
        length = prompt(warning + "Choose your Password Length", 8);
        warning = "Invalid length. ";
        if (length < 8 || length > 128) {
            i--; // telling it to go through the loop again
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

    if (uselowerCase || useupperCase || usenumeric || usespecialChar) {
        //in a loop, for the length of the password, pick a random item from the possible options
        for (var i = 0; i < length; i++) {

            //asking computer to pick one of the arrays to get a random character
            var nextArrayPosition = Math.floor(Math.random() * array.length);
            //checking to see which items user picked
            if ((nextArrayPosition === 0 && uselowerCase) ||
                (nextArrayPosition === 1 && useupperCase) ||
                (nextArrayPosition === 2 && usenumeric) ||
                (nextArrayPosition === 3 && usespecialChar)) {
                //computer picks a good array, a random character gets generated from that array
                var selectedArray = array[nextArrayPosition];
                var randCharacterPosition = Math.floor(Math.random() * selectedArray.length);
                //append the selected random character to the password displayed to the user
                storedPassword = storedPassword + selectedArray[randCharacterPosition];

            } else {
                //computer picked an array that the user didn't want to include in the password, so then stays in the same position in the loop until the computer picks one the user doesn't
                i--;
            }
        };
        // Display the results to the user
        var passwordElement = document.getElementById("password");
        passwordElement.innerHTML = storedPassword;

    } else {
        ///alert for no characters chosen
        alert("No characters were chosen, click Generate Password again!")
    }
})



