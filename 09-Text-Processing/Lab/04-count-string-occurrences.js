function printStringOccurrences(text, targetWord) {
  text = text.split(' ');
  let count = 0;
  for (let word of text) {
    if (word === targetWord) {
      count++;
    }
  }

  console.log(count);
}

printStringOccurrences('This is a word and it also is a sentence', 'is')