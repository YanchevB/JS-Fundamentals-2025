function sumEvenNumbers(arr) {
  let sum = 0;
  for (let evenNumber of arr) {
    if (Number(evenNumber) % 2 === 0) {
      sum += Number(evenNumber);
    }
  }
  console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);