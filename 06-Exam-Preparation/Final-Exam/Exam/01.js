function solve(input) {
  let string = input.shift();
  for (let line of input) {
    let [command, param1, param2] = line.split(' ');
    if (command === 'Done') break;

    switch (command) {
      case 'Change':
        let char = param1;
        let replacement = param2;

        if (string.includes(char)) {
          string = string.split(char).join(replacement);
        }

        console.log(string);
        break;
    
      case 'Includes':
        let substring = param1;
        if (string.includes(substring)) {
          console.log('True');
        } else {
          console.log('False');
        }
        break;
      
      case 'End':
        let endSubstring = param1;
        if (string.endsWith(endSubstring)) {
          console.log('True');
        } else {
          console.log('False');
        }
        break;

      case 'Uppercase':
        string = string.toUpperCase();
        console.log(string);
        break;

      case 'FindIndex':
        let charIndex = param1;
        console.log(string.indexOf(charIndex));
        break;

      case 'Cut':
        let startIndex = Number(param1);
        let count = Number(param2);

        string = string.split('').splice(startIndex, count).join('');
        console.log(string);
        break;
    }
  }
}

solve([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done"
]);