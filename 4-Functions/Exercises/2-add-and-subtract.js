function addAndSubtract(num1, num2, num3) {
  let sum = (a, b) => a + b;
  let subtract = (x, y) => x - y;

  let resultOfSum = sum(num1, num2);
  let result = subtract(resultOfSum, num3);
  return result;
}

console.log(addAndSubtract(23, 6, 10));