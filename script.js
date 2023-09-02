// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
