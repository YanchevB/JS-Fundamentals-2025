function repeatString(str, repeatCount) {
  let result = '';
  for (let i = 1; i <= repeatCount; i++) {
    result += str;
  }
  return result;
}

console.log(repeatString('String', 2));