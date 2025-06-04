function equalSums(arr) {
  let isFound = false;
  let sumLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let sumRight = 0;

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];
      sumRight += nextNum
      if (sumRight > sumLeft) {
        break;
      }
    }

    if (sumLeft === sumRight) {
      isFound = true;
      console.log(i);
      break;
    }
    
    sumLeft += currentNum;
  }

  if (!isFound) {
    console.log('no');
  }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);