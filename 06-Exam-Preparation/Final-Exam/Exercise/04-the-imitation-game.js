function decryptMessage(input) {
  let encryptedMessage = input.shift();

  for (let line of input) {
    let [command, param1, param2] = line.split('|');

    if (command === 'Decode') {
      break;
    }

    switch (command) {
      case 'Move':
        let endIndex = Number(param1);
        let movedLetters = encryptedMessage.slice(0, endIndex);
        encryptedMessage = encryptedMessage.replace(movedLetters, '').concat(movedLetters);
        break;
    
      case 'Insert':
        let index = Number(param1);
        let value = param2;
        encryptedMessage = 
          encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index);
        break;
      case 'ChangeAll':
        let substring = param1;
        let replacement = param2;
        encryptedMessage = encryptedMessage.split(substring).join(replacement);
        break;
    }
  }
  console.log(`The decrypted message is: ${encryptedMessage}`);
}

decryptMessage([
'zzHe',
'ChangeAll|z|l',
'Insert|2|o',
'Move|3',
'Decode'
]);