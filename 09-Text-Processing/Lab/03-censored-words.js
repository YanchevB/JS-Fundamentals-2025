function printCensoredWords(sentence, word) {
  let censored = sentence.replaceAll(word, '*'.repeat(word.length));
  console.log(censored);
}

printCensoredWords('A small sentence with some words', 'small')