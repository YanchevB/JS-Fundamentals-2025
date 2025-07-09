function fillOutSentence(words, sentence) {
  words = words.split(', ');
  let length = new Map();
  let sentenceArr = sentence.split(' ');

  for (let word of words) {
    length.set(word, word.length);
    let targetWord = length.get(word);

    for (let currentWord of sentenceArr) {
      if (currentWord.includes('*')) {
        if (currentWord.length === targetWord) {
          sentence = sentence.replace(currentWord, word);
        }
      }
    }
  }
  console.log(sentence);
}

// fillOutSentence('great',
// 'softuni is ***** place for learning new programming languages');

fillOutSentence('great, learning',
'softuni is ***** place for ******** new programming languages');