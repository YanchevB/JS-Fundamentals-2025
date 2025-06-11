function arrayRotation(arr, rotations) {
  let len = arr.length;
  let r = rotations % len
  let result = [];

  for (let i = r; i < len; i++) {
    result.push(arr[i]);
  }

  for (let j = 0; j < r; j++) {
    result.push(arr[j]);
  }

  console.log(result.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);