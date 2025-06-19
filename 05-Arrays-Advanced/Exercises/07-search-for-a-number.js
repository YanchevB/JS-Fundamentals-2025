function searchForANum(targetArr, instructionsArr) {
  let [totalNumbers, removedNumbers, targetNumber] = instructionsArr;

  let newArr = targetArr.splice(0, totalNumbers);
  newArr = newArr.slice(removedNumbers);
  let targetNumCounter = 0;
  for (let num of newArr) {
    if (num === targetNumber) {targetNumCounter++};
  }
  console.log(`Number ${targetNumber} occurs ${targetNumCounter} times.`);
}

searchForANum([5, 2, 3, 4, 1, 6],
[5, 2, 3]);