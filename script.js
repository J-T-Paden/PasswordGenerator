// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // variable declarations
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
  var lengthPrompt
  var uppercasePrompt
  var lowercasePrompt
  var numericPrompt
  var specialPrompt
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseCharacters = [];
  // Used forloop to create lowercaseCharacters array instead of retyping the alphabet strings
  for (let i = 0; i < uppercaseCharacters.length; i++) {
    lowercaseCharacters.push(uppercaseCharacters[i].toLowerCase());
  };
  var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ]

// Each random function declaration
function getRandomLowercase() {
  return lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];  
}
function getRandomUppercase() {
return uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
}
function getRandomNumeric() {
  return numericalCharacters[Math.floor(Math.random() * numericalCharacters.length)];
  }
function getRandomSpecial() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  lengthPrompt = window.prompt("Please input a length for your password between 8 and 128 characters.");
  lengthPrompt = Number(lengthPrompt);
    if(lengthPrompt <8 || lengthPrompt >128) {
      window.alert("Password length not within parameters.");
    } else { password.length = lengthPrompt;
       // Make password.length = lengthPrompt, move onto lowercaseCharacters
    }
console.log(password.length);


    lowercasePrompt = window.confirm("Lowercase characters?");
    if(lowercasePrompt == true) {
      // populate password with lowercaseCharacters randomly
    } else {
      // do not populate password with lowercaseCharacters, move onto uppercaseCharacters
    }
    uppercasePrompt = window.confirm("Uppercase characters");
    if(uppercasePrompt == true) {
      // populate password with uppercaseCharacters randomly
    } else {
      // do not populate password with uppercaseCharacters, move onto numericalPrompt
    }
    numericPrompt = window.confirm("Numeric characters?");
    if(numericPrompt == true) {
      // populate password with numericalCharacters randomly
    } else {
      // do not populate password with numericalCharacters move onto specialPrompt
    }
    specialPrompt = window.confirm("Special characters?");
    if(specialPrompt == true) {
      // populate password with speccialCharacters randomly
    } else {
      // do not populate password with specialCharacters, give password
    }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);