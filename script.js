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

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for desired password length
  var passwordLength = parseInt(
    prompt("Enter a number between 10 and 64 for the desired password length")
  );

  // Validate user input
  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Invalid password length! Please enter a number between 10 and 64.");
    return null;
  }

  // Prompt user for character types to include in password
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  // Validate that at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("You must select at least one character type.");
    return null;
  }

  // Create an object to store password options
  var passwordOptions = {
    passwordLength: passwordLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };

  return passwordOptions;
}

// Function to generate a random password
function generatePassword() {
  // Get password options from user
  var passwordOptions = getPasswordOptions();

  // If user clicks "Cancel" or enters invalid input, return an empty string
  if (!passwordOptions) {
    return "";
  }

  // Create an array to store possible characters for the password
  var possibleCharacters = [];

  // Add lowercase characters to possible characters array if user selected them
  if (passwordOptions.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(
      "abcdefghijklmnopqrstuvwxyz".split("")
    );
  }

  // Add uppercase characters to possible characters array if user selected them
  if (passwordOptions.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    );
  }

  // Add numeric characters to possible characters array if user selected them
  if (passwordOptions.includeNumeric) {
    possibleCharacters = possibleCharacters.concat("0123456789".split(""));
  }

  // Add special characters to possible characters array if user selected them
  if (passwordOptions.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(
      "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")
    );
  }

  // Create a variable to store the password
  var password = "";

  // Generate random password by selecting random characters from the possible characters array
  for (var i = 0; i < passwordOptions.passwordLength; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

  // Return the generated password
  return password;
}

// Function to handle button click event
function handleButtonClick() {
  // Get the password element
  var passwordEl = document.getElementById("password");

  // Generate a new password
  var password = generatePassword();

  // Update the password element with the new password
  passwordEl.value = password;
}

// Add event listener to generate button
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", handleButtonClick);
