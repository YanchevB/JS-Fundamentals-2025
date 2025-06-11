function findCharsInRange(char1, char2) {
  function findSmallerChar(c1, c2) {
    let char1 = c1.charCodeAt(0);
    let char2 = c2.charCodeAt(0);

    if (char1 < char2) {
      return [char1, char2];
    } else {
      return [char2, char1];
    }
  }

  let [start, stop] = findSmallerChar(char1, char2);

  let result = [];
  for (let i = start + 1; i < stop; i++) {
    result.push(String.fromCharCode(i));
  }

  return result.join(' ')
}

console.log(findCharsInRange('C', '#'));