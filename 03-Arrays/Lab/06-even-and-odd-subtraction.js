function differenceEvenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sumEven += Number(arr[i]);
    } else {
      sumOdd += Number(arr[i]);
    }
  }
  console.log(sumEven - sumOdd);
}

differenceEvenOdd([3,5,7,9]);