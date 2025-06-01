function equalArrays(arr1, arr2) {
  let sum = 0;
  let isDifferent = false;
  for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i]) !== Number(arr2[i])) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isDifferent = true;
      break;
    } else {
      sum += Number(arr1[i]);
    }
  }

  if (!isDifferent) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(
  ['1'],
  ['5']
);