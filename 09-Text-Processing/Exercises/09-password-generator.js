function passwordGenerator(input) {
  let firstString = input.shift();
  let secondString = input.shift();
  let thirdString = input.shift().toUpperCase();
  
  let concatenated = firstString.concat(secondString);
  let vowelMatch = /[aeiou]/gi;
  let current = 0;
  for (let char of concatenated) {
    if (char.match(vowelMatch)) {
      for (i = current; i < thirdString.length; i++) {
        let newCharr = thirdString[i];
        concatenated = concatenated.replace(char, newCharr);
        i++
        break;
      }

      if (i === thirdString.length) {
        current = 0;
      } else {
        current = i;
      }
    }
  }
  let password = concatenated.split('').reverse().join('')
  console.log(`Your generated password is ${password}`);
}

passwordGenerator([
  'ilovepizza', 
  'ihatevegetables',
  'orange'
]);

passwordGenerator([
  'easymoneyeazylife', 
  'atleasttencharacters', 
  'absolute'
])