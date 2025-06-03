function addAndSubtract(arr) {
  let newArr = [];
  let sum = 0;
  let newArrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    sum += currentNum;

    if (currentNum % 2 === 0) {
      currentNum += i;
      newArrSum += currentNum
      newArr.push(currentNum);
    } else {
      currentNum -= i;
      newArrSum += currentNum;
      newArr.push(currentNum);
    }
  }

  console.log(newArr);
  console.log(sum);
  console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])