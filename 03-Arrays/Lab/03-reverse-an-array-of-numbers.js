function reverseAnArray(num, arr) {
  let newArr = [];
  for (let i = 0; i <= num - 1; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr.reverse().join(' '));
}

reverseAnArray(3, [10, 20, 30, 40, 50]);