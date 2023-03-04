// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// // Function to prompt user for password options
// // rules so they can't choose anything outside that range
// function getPasswordOptions() {}

// // function generatePassword() {
// //   alert("Called this function. Wheeee!!!");
// //   return "This is a secret password. Whee."
// // }

// // Function for getting a random element from an array
// function getRandom(arr) {}

// Function to generate password with user input
// write to apply to the 2 functions above??
function generatePassword() {
  //this needs moving to getPasswordOptions when I'm sure it works
  //user defined length and validation of length input
  while (true) {
    const promptlength = prompt(
      "Enter a number between 10 - 64 for desired password length",
      ""
    );
    if (!isNaN(promptlength) && promptlength >= 10 && promptlength <= 64) {
      break;
    }
    alert("Your entry must be a number between 10 and 64.");
  }
  return"";
}

  const includeSpecial = confirm("Would you like to include special characters in your password?");
  const includeNumeric = confirm("Would you like to include numeric characters in your password?");
  const includeLower = confirm("Would you like to include lowercase characters in your password?");
  const includeUpper = confirm("Would you like to include uppercase characters in your password?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
