// character variables
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numericCharacters =  "0123456789";
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCasedCharacters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chosencharacters = "";
var result = "";

// generate password
function generatePassword() {
  var result = "";
  var length = prompt(
    "How many characters would you like your password to have? (8-128 characters)");
    console.log("The lenght is" + length);

  if (length >= 8 && length <= 128) {
    var lowercase = confirm("Would you like to include lowercase characters? Click OK for yes and Cancel for No.");
    console.log("Lowercase = " + lowercase);

    var uppercase = confirm("Would you like to include uppercase characters? Click OK for yes and Cancel for No.");
    console.log("Uppercase = " + uppercase);

    var special = confirm("Would you like to include special characters? Click OK for yes and Cancel for No.");
    console.log("Special Characters = " + special);

    var numbers = confirm("Would you like to include numbers? Click OK for yes and Cancel for No.");
    console.log("Numbers = " + numbers);

  //Alert if nothing is selected
  if (!lowercase && !uppercase && !special && !numbers) {
    alert("Invalid input. Please choose at least one character type");
    console.log("Invalid input");
    return "Please Enter Character"
  }
  
  // Retrive characters for password
  if (lowercase) {
    chosencharacters += lowerCasedCharacters;
  }
  if (special) {
    chosencharacters += specialCharacters;
  }
  if (uppercase) {
    chosencharacters += upperCasedCharacters;
  }
  if (numbers) {
    chosencharacters += numericCharacters;
  }

  //Generate password with chosen characters
  for (var i = 0; i < length; i++) {
    result += chosencharacters.charAt(Math.floor(Math.random() * chosencharacters.length));
  }
  
 // Show password on page
 return result;}

 //Alert if lenght requirment is not met
 else {
   alert("Invalid Input. Please enter a number between 8 and 128.");
   console.log("Invalid Length");
   return "Try Again";
 }
}

// create password to input
function createPassword() {
  var password = generatePassword();
  var passwordCharacters = document.querySelector("#password");

  passwordCharacters.value = password;
}

//Generate button
var generateBtn = document.querySelector("#generate");

//Event listner for button
generateBtn.addEventListener("click", createPassword);