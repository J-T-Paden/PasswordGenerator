// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseCharacters = [];
  // Used forloop to create lowercaseCharacters array instead of retyping the alphabet strings
  for (let i = 0; i < uppercaseCharacters.length; i++) {
    lowercaseCharacters.push(uppercaseCharacters[i].toLowerCase());
  };
  var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ]
  lengthPrompt = window.prompt("Please input a length for you password between 8 and 128.");
  lowercasePrompt = window.prompt("Lowercase characters?");
  uppercasePrompt = window.prompt("Uppercase characters?");
  numericPrompt = window.prompt("Numerical characters?");
  specialPrompt = window.prompt("Special characters?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
