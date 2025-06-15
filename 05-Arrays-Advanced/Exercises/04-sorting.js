function sortArray(arr) {
  let result = [];
  let smallestToBiggest = arr.slice().sort((a, b) => a - b);
  let biggestToSmallest = smallestToBiggest.slice().sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      result.push(smallestToBiggest.shift());
    } else {
      result.push(biggestToSmallest.shift());
    }
  }

  console.log(result.join(' '));
}

sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])