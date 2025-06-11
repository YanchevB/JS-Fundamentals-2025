function findOddAndEvenSum(num) {
  let numAsString = String(num);

  function sumOddDigits(input) {
    let oddDigitsSum = 0;
    for (let i = 0; i < input.length; i++) {
      let currentDigit = Number(input[i]);
      if (currentDigit % 2 !== 0) {
        oddDigitsSum += currentDigit;
      }
    }
    return oddDigitsSum;
  }

  function sumEvenDigits(input) {
    let evenDigitsSum = 0;
    for (let i = 0; i < input.length; i++) {
      let currentDigit = Number(input[i]);
      if (currentDigit % 2 === 0) {
        evenDigitsSum += currentDigit;
      }
    }
    return evenDigitsSum;
  }

  let oddDigitsSum = sumOddDigits(numAsString);
  let evenDigitsSum = sumEvenDigits(numAsString);
  
  console.log(`Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`);
}

findOddAndEvenSum(1000435);