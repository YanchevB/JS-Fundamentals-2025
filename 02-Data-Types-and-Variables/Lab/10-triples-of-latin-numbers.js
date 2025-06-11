function triplesOfLatinNumbers(string) {
  let number = Number(string);
  for (let i = 0; i < number; i++) {
    let firstLetter = '' + String.fromCharCode(97 + i);
    for (let j = 0; j < number; j++) {
      let secondLetter = firstLetter + String.fromCharCode(97 + j);
      for (let k = 0; k < number; k++) {
        let thirdLetter = secondLetter + String.fromCharCode(97 + k)
        console.log(thirdLetter);
      }
    }
  }
}

triplesOfLatinNumbers('3');