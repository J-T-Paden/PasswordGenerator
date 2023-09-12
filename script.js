// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// variable declarations
  function generatePassword() {
  var lengthPrompt
  var uppercasePrompt
  var lowercasePrompt
  var numericPrompt
  var specialPrompt
  var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var lowercaseCharacters = [];
  // Used forloop to create lowercaseCharacters array instead of retyping the alphabet strings
  for (let i = 0; i < uppercaseCharacters.length; i++) {
    lowercaseCharacters.push(uppercaseCharacters[i].toLowerCase());
  };
  var numericalCharacters = ["0123456789"];
  var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~" ]
  var prePassword
  // Each random function declaration
  lengthPrompt = window.prompt("Please input a length for your password between 8 and 128 characters.");
  lengthPrompt = Number(lengthPrompt);
    if(lengthPrompt <8 || lengthPrompt >128) {
      window.alert("Password length not within parameters.");
       // Make prePassword.length = lengthPrompt, move onto lowercaseCharacters
    }


    lowercasePrompt = window.confirm("Lowercase characters?");
    if(lowercasePrompt == true) {
      prePassword = +lowercaseCharacters
    } else {prePassword = ""}

    uppercasePrompt = window.confirm("Uppercase characters?");
    if(uppercasePrompt == true && lowercasePrompt == true) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters
    } else if (uppercasePrompt == true && lowercasePrompt == false){
      prePassword = prePassword +uppercaseCharacters
    } else if (uppercasePrompt == false && lowercasePrompt == true) {
      prePassword = prePassword +lowercaseCharacters
    } else {prePassword = ""};

    numericPrompt = window.confirm("Numeric characters?");
    if(uppercasePrompt == true && lowercasePrompt == true && numericPrompt == true) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters +numericalCharacters
    } else if(uppercasePrompt == false && lowercasePrompt == true && numericPrompt == true) {
      prePassword = prePassword +lowercaseCharacters +numericalCharacters
    } else if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == true) {
      prePassword = prePassword +numericalCharacters
    } else {prePassword = ""};

    specialPrompt = window.confirm("Special characters?");
    // if all prompts return true
    if(uppercasePrompt == true && lowercasePrompt == true && numericPrompt == true && specialPrompt == true) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters +numericalCharacters +specialCharacters
      // each iteration if 1 prompt returns false
    } else if(uppercasePrompt == false && lowercasePrompt == true && numericPrompt == true && specialPrompt == true) {
      prePassword = prePassword +lowercaseCharacters +numericalCharacters +specialCharacters
    } else if(uppercasePrompt == true && lowercasePrompt == false && numericPrompt == true && specialPrompt == true) {
      prePassword = prePassword +uppercaseCharacters +numericalCharacters +specialCharacters
    } else if(uppercasePrompt = true && lowercasePrompt == true && numericPrompt == false && specialCharacters == true) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters +specialCharacters
    } else if(uppercasePrompt == true && lowercasePrompt == true && numericPrompt == true && specialPrompt == false) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters +numericalCharacters
      // each iteration if 2 prompts return false
    } else if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == true && specialPrompt == true) {
      prePassword = prePassword +numericalCharacters +specialCharacters
    } else if (uppercasePrompt == true && lowercasePrompt == false && numericPrompt == false && specialPrompt == true) {
      prePassword = prePassword +uppercaseCharacters +specialCharacters
    } else if (uppercasePrompt == true && lowercasePrompt == true && numericPrompt == false && specialPrompt == false) {
      prePassword = prePassword +uppercaseCharacters +lowercaseCharacters
    } else if (uppercasePrompt == false && lowercasePrompt == true && numericPrompt == true && specialPrompt == false) {
      prePassword = prePassword +lowercaseCharacters +numericalCharacters
      // each iterration if 3 prompts return false
    } else if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == false && specialPrompt == true) {
      prePassword = prePassword +specialCharacters
    } else if (uppercasePrompt == true && lowercasePrompt == false && numericPrompt == false && specialPrompt == false) {
      prePassword = prePassword +uppercaseCharacters
    } else if (uppercasePrompt == false && lowercasePrompt == true && numericPrompt == false && specialPrompt == false) {
      prePassword = prePassword +lowercaseCharacters
    } else if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == true && specialPrompt == false) {
      prePassword = prePassword +numericalCharacters
    } else {prePassword = ""};
    // if all prompts return false, return alert
    if (uppercasePrompt == false && lowercasePrompt == false && numericPrompt == false && specialPrompt == false) {
      window.alert("No character type selected. Unable to create password.")
    }
    console.log(prePassword);
    prePassword.length = lengthPrompt;
    for (let i = 0; i < prePassword.length; i++) {
      password += prePassword[[Math.floor(Math.random() * prePassword.length)]];
    };
  return password;
}
// Add event listener to generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);