function replaceRepeatingChars(str) {
  let result = [];
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result.push(str[i]);
    }
  }

  console.log(result.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');