function magicSum(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push(arr[i], arr[j]);
        console.log(result.join(' '));
        result = [];
      }
    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);