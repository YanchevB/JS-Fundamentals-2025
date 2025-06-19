function detonateBomb(inputArr, bombArr) {
  let [bombNumber, bombPower] = bombArr;
  let sum = 0;
  
  while (inputArr.includes(bombNumber)) {
    let index = inputArr.indexOf(bombNumber);
    let startIndex = index - bombPower;
    let totalBombed = (bombPower * 2) + 1
    if (startIndex < 0) {startIndex = 0};
    inputArr.splice(startIndex, totalBombed)
  }

  for (let num of inputArr) {
    sum += num;
  }

  console.log(sum);
}

detonateBomb(
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [2, 1])