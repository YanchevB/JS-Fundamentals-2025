function checkSign(num1, num2, num3) {
  let negativeCounter = 0;

  if (num1 < 0) {
    negativeCounter++;
  }
  
  if (num2 < 0) {
    negativeCounter++;
  }
  
  if (num3 < 0) {
    negativeCounter++
  }

  if (negativeCounter === 1 || negativeCounter === 3) {
    return 'Negative';
  } else {
    return 'Positive';
  }
}

console.log(checkSign(-5, 12, -15))