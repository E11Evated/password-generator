// Assignment Code
var generateBtn = document.querySelector("#generate");


var pwdinfo = {

  //length of password
  pwdLength: 0,

  //lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  // numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //special characters
  pwdSymbols: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}


function writePassword() {

  var password = generatePassword();
  
  
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {


  var result = "";

  //variables to collect from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var symbols;

  //initialize info
  passwordLength = 0;
  pwdinfo.pwdLength = 0;
  result = "";

  
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
    
      if (!isFinite(passwordLength)) {
        alert("Please enter a number");
        return "Your secure password";
      }
      else {
        //check password meets length 
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          showPrompts();

          
          while (pwdinfo.pwdLength < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              if (lowerCase === true && pwdinfo.pwdLength < passwordLength) {
                var lc = pwdinfo.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdinfo.pwdLength++;
              }           
              if (symbols === true && pwdinfo.pwdLength < passwordLength) {
                var sc = pwdinfo.pwdSymbols[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdinfo.pwdLength++;
              }
              if (upperCase === true && pwdinfo.pwdLength < passwordLength) {
                var uc = pwdinfo.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdinfo.pwdLength++;
              }
              if (numbers === true && pwdinfo.pwdLength < passwordLength) {
                var num = pwdinfo.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdinfo.pwdLength++;
              }
            }
          }
        }
      }
    }

   // Final return for password
    return result;

    //promts functions
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      symbols = confirm("Do you want to use any special characters?");
    }
  }
}

// The only thing i dont know how to do is randomize the the array after it returns the password info from the user.
