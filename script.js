// Variables below
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// When I click on the button the writePassword will run
generateBtn.addEventListener('click', writePassword);

function generatePassword() {

  var userChoice = "" 
  var generatedPassword = ""

  // Number of characters prompt
    // The prompt when the generate button is clicked
    var passUserInput = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
    console.log(passUserInput);

    // If user pressed Cancel, immediately end function
  if (!passUserInput) {
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

  // Lowercase characters prompt
  var lowercaseUserInput = confirm("Would you like lowercase characters (y/n)?");

  if (lowercaseUserInput === true) {
  userChoice = userChoice + lowercaseChars
  }

  // Uppercase characters prompt
  var uppercaseUserInput = confirm("Would you like uppercase characters (y/n)?");

  if (uppercaseUserInput === true) {
    userChoice = userChoice + uppercaseChars
  }

  // Numeric characters prompt
  var nuUserInput = confirm("Would you like numeric characters (y/n)?");

  if (nuUserInput === true) {
    userChoice = userChoice + numberChars
  }

  // Special characters prompt
  var spUserInput = confirm("Would you like special characters (y/n)?");

  if (spUserInput === true) {
    userChoice = userChoice + specialChars
  }

  // Making the password
  userChoice.charAt(Math.floor(Math.floor(Math.random() * userChoice.length)))
  console.log(userChoice)

  for (var i = 0; i < passUserInput; i++) {
    generatedPassword = generatedPassword + userChoice.charAt(Math.floor(Math.floor(Math.random() * userChoice.length)))
    console.log(generatedPassword)
  }
  console.log(generatedPassword)

  return generatedPassword

}





