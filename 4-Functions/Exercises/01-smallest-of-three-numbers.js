function findSmallestNumber(num1, num2, num3) {
  let smallest = num1;
  if (smallest > num2) {
    smallest = num2;
  }

  if (smallest > num3) {
    smallest = num3
  }

  return smallest;
}

console.log(findSmallestNumber(2, 2, 2));