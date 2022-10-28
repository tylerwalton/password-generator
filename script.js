// make character array

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars= "!@#$%^&*?+-=_'(),.;:<>{}[]/|`~ ";
var numbers= "1234567890";


var charecterPool = [];
var password = [];
// combine arrays and put into a function
var generatePassword = function (){
  lowerCase = lowerCase.split("");
  upperCase = upperCase.split("");
  specialChars = specialChars.split("");
  numbers = numbers.split("");

  // make window messages 
window.alert("HI! Lets make a password")

var numberOfChar = window.prompt ("How many charecters would you like to add?")
if (numberOfChar < 8 || numberOfChar > 128) {
  alert("Passwrod Length must be between 8 and 128")
  return;
}

var addUpperCase = window.confirm ("Would you like to add upper case letters?")
var addLowerCase = window.confirm ("Would you like to add lower case letters?")
var addSpecialChar = window.confirm ("How about some special charecters?")
var addNumbers = window.confirm ("Lastly, would you like to add some numbers?")
if (!addUpperCase && !addLowerCase && !addSpecialChar && !addNumbers) {
  alert("You must choose at least one charecter type.")
  return;
}

if ( addUpperCase === true ) {
  charecterPool = charecterPool.concat (upperCase)
}
if ( addLowerCase === true ) {
  charecterPool = charecterPool.concat (lowerCase)
}
if ( addSpecialChar === true ) {
  charecterPool = charecterPool.concat (specialChars)
}
if ( addNumbers === true ) {
  charecterPool = charecterPool.concat (numbers)
}
console.log(charecterPool);

//make randomizer equation then put in function 
for (var i = 0; i < numberOfChar; i++){
  var randomIndex = Math.floor (Math.random()* charecterPool.length) 
var indexValue =  charecterPool [randomIndex]
password.push(indexValue);

}
return password.join ('')
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);