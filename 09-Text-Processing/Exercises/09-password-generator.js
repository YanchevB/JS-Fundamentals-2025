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
      current = i;
    }
  }
}

passwordGenerator([
  'ilovepizza', 
  'ihatevegetables',
  'orange'
]);