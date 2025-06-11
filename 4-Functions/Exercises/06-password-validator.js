function validatePassword(password) {
  let isValid = true;
  if (!checkLength(password)) {
    console.log('Password must be between 6 and 10 characters');
    isValid = false;
  }

  if (!checkLettersAndDigits(password)) {
    console.log('Password must consist only of letters and digits');
    isValid = false;
  }

  if (checkDigits(password) < 2) {
    console.log('Password must have at least 2 digits');
    isValid = false;
  }

  if (isValid) {
    console.log('Password is valid');
  }

  function checkLength(input) {
    let pwdLength = input.length
    if (!checkRange(pwdLength, 6, 10)) {
      return false;
    } else {
      return true;
    }
  }

  function checkRange(num, min, max) {
    return num >= min && num <= max;
  }

  function checkLettersAndDigits(input) {
    for (let i = 0; i < input.length; i++) {
      let asciiCode = input[i].charCodeAt(0);
      if (!checkRange(asciiCode, 48, 74) 
        && !checkRange(asciiCode, 65, 90) 
        && !checkRange(asciiCode, 97, 122)
      ) {
        return false
      }
    }
    return true;
  }

  function checkDigits(input) {
    let totalDigits = 0;
    for (let i = 0; i < input.length; i++) {
      let asciiCode = input[i].charCodeAt(0)
      if (checkRange(asciiCode, 48, 74)) {
        totalDigits++;
      }
    }
    return totalDigits;
  }
}

validatePassword('logIn');