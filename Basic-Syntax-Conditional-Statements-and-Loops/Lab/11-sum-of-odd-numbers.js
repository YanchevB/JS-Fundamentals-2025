function sumOfOddNumbers(num) {
  let sum = 0;
  let printedNumbers = 0;
  let currentNumber = 1;
  while (printedNumbers < num) {
    console.log(currentNumber);
    sum += currentNumber;
    currentNumber += 2;
    printedNumbers++;
  }
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);