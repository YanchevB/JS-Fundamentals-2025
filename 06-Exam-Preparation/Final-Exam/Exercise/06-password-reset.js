function resetPassword(input) {
  let currentPassword = input.shift();

  for (let line of input) {
    let [command, param1, param2] = line.split(' ');
    if (command === 'Done') break;

    switch (command) {
      case 'TakeOdd': {
        let newPassword = '';
        for (let i = 1; i < currentPassword.length; i += 2) {
          newPassword += currentPassword[i];
        }
        currentPassword = newPassword;
        console.log(currentPassword);
        break;
      }

      case 'Cut': {
        let index = Number(param1);
        let length =  Number(param2);
        let newPassword = currentPassword.slice(index, length + index);
        currentPassword = currentPassword.replace(newPassword, '');
        console.log(currentPassword);
        break;
      }
      case 'Substitute': {
        let substring = param1;
        let substitute = param2;

        if (currentPassword.includes(substring)) {
          for (let char of currentPassword) {
            currentPassword = currentPassword.replace(substring, substitute);
          }
          console.log(currentPassword);
        } else {
          console.log('Nothing to replace!');
        }
        break;
      }
    }
  }
  console.log(`Your password is: ${currentPassword}`);
}

resetPassword([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"
]);

resetPassword([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"
])