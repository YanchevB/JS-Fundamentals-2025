function printSubstring(string, startIndex, count) {
  let result = string.substring(startIndex, startIndex + count);
  console.log(result);
}

printSubstring('ASentence', 1, 8);