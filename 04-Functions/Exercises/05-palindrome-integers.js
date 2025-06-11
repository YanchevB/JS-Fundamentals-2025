function checkForPalindromeIntegers(arr) {
  function reverseNum(num) {
    let numAsString = String(num);
    let reversed = numAsString.split('').reverse().join('');
    return Number(reversed);
  }

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let reversedNum = reverseNum(arr[i]);
    if (currentNum === reversedNum) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

checkForPalindromeIntegers([123,323,421,121])