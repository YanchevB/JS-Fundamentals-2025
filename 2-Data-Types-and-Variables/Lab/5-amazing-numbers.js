function amazingNumbers(num) {
  let numAsString = String(num);
  let sum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }

  if (sum.toString().includes('9')) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumbers(1233);