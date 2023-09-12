// Variables below
var passwordLength = // 8-128 ???
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Make variable for the #generate element
var generateBtn = document.querySelector("#generate");

// Number of characters prompt
// Attach event listener to button element
generateBtn.addEventListener("click", function() {
  // The prompt when the generate button is clicked
  var passUserInput = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  console.log(passUserInput);

  // If user pressed Cancel, immediately end function
if (passUserInput) {
  return;
}

if (passUserInput < 8) {
  alert("Password must have more than 7 characters!");
  return;
}

if (passUserInput > 128) {
  alert("Password must have less than 128 characters!");
  return;
}

});


// Lowercase characters prompt
var lowercaseUserInput = prompt("Would you like lowercase characters (y/n)?");

if (lowercaseUserInput === "y") {

}

if (lowercaseUserInput === "n") {

}


// Uppercase characters prompt
var uppercaseUserInput = prompt("Would you like uppercase characters (y/n)?");

if (lowercaseUserInput === "y") {

}

if (lowercaseUserInput === "n") {

}

// Numeric characters prompt
var nuUserInput = prompt("Would you like numeric characters (y/n)?");
console.log(nuUserInput);


  
// Special characters prompt
var spUserInput = prompt("Would you like special characters (y/n)?");
console.log(spUserInput);














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
