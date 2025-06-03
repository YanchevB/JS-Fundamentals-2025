function mergeArrays(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr2.length; j++) {
      if (i % 2 === 0) {
        let sum = Number(arr1[i]) + Number(arr2[j]);
        newArr.push(sum);
        break;
      } else {
        let concatenate = arr1[i] + arr2[j];
        newArr.push(concatenate);
        break;
      }
    }
  }
  console.log(newArr.join(' - '));
}

mergeArrays(
  ['5', '15', '23', '56', '35'],
  ['17', '22', '87', '36', '11']
)