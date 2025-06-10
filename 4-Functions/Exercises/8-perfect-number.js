function findPerfectNumber(num) {
  function sumDivisors(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum === n ? true : false;
  }

  if (sumDivisors(num)) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

findPerfectNumber(1236498);