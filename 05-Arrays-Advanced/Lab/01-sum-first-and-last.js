function sumFirstAndLast(arr) {
  arr = arr.map(Number);
  console.log(arr[0] + arr.pop());
}

sumFirstAndLast(['20', '30', '40'])