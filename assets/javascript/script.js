/// Generate an array of possible options that could be included in the password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

///created an array of options above
var array = [lowerCase, upperCase, numeric, specialChar];

console.log(array);

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



    ///check to make sure they answered yes to at least one of the questions








    //in a loop, for the length of the password, pick a random item from the  possible options



    // Display the results to the user
