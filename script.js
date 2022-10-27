// create a prompt that asks for the length of password

// promt user to pick what types of charecters they want

// make charecter array

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChars= ["!@#$%^&*?+-=_'(),.;:<>\{}[]/|`~ "];
var numbers= ["1234567890"];

//make randomizer equation then put in function 

// make window messages 
window.alert("HI! Lets make a password")

var addUpperCase = window.prompt ("Would you like to add upper case letters?")
var addLowerCase = window.prompt ("Would you like to add lower case letters?")
var numberOfChar = window.prompt ("How many charecters would you like to ad? You can choose between 8 & 128.")
var addSpecialChar = window.prompt ("How about some special charecters?")
var addNumbers = window.prompt ("Lastly, would you like to add some numbers?")

// combine arrays and put into a function



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click writePassword);
