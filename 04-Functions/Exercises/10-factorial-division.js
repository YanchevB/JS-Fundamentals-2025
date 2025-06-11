function factorialDivision(num1, num2) {
  let result = findFactorial(num1) / findFactorial(num2);
  console.log(result.toFixed(2));

  function findFactorial(n) {
    let factorialNum = 1;
    for (let i = 1; i <= n; i++) {
      factorialNum *= i;
    }
    return factorialNum;
  }
}

factorialDivision(6, 2);