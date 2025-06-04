function maxNumber(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i];
    let isBigger = true;

    for (let j = i + 1; j < arr.length; j++) {
      let right = arr[j];
      if (right >= left) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      result.push(left)
    }
  }

  console.log(result.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);