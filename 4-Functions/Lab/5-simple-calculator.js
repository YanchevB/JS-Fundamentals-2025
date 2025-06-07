function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case 'multiply':
      result = (x, y) => x * y;
      break;
    case 'divide':
      result = (x, y) => x / y;
      break;
    case 'add':
      result = (x, y) => x + y;
      break;
    case 'subtract':
      result = (x, y) => x - y;
      break;
  }

  return result(num1, num2);
}

console.log(calculate(5, 5, 'multiply'));