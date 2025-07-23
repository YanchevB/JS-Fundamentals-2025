function registerUser(input) {
  let username = input.shift()
  
  for (let command of input) {
    if (command === 'Registration') break;

    if (command.includes('Letters')) {
      command = command.split(' ');
      if (command[1] === 'Lower') {
        username = username.toLowerCase();
        console.log(username);
      } else if (command[1] === 'Upper') {
        username = username.toUpperCase();
        console.log(username);
      }

    } else if (command.includes('Reverse')) {
      command = command.split(' ');
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]) + 1;

      if (startIndex >= 0 &&
        endIndex >= 0 &&
        startIndex < username.length &&
        endIndex < username.length) {

        let toBeReversed = username.substring(startIndex, endIndex);
        toBeReversed = toBeReversed.split('').reverse().join('');
        console.log(toBeReversed);
      } else {
        continue;
      }

    } else if (command.includes('Substring')) {
      command = command.split(' ');
      let substring = command[1];
      
      if (username.includes(substring)) {
        username = username.split(substring).join('')
        console.log(username);
      } else {
        console.log(`The username ${username} doesn't contain ${substring}.`);  
      }

    } else if (command.includes('Replace')) {
      command = command.split(' ');
      let char = command[1];

      username = username.split(char).join('-');
      console.log(username);

    } else if (command.includes('Valid')) {
      command = command.split(' ');
      let char = command[1];

      if (username.includes(char)) {
        console.log('Valid username.');
      } else {
        console.log(`${char} must be contained in your username.`);
      }
    }
  }
}

registerUser([
  'John',
  'Letters Lower',
  'Substring SA',
  'IsValid @',
  'Registration'
]);

registerUser([
  'ThisIsSoftUni',
  'Reverse 1 3',
  'Replace S',
  'Substring hi',
  'Registration'
]);