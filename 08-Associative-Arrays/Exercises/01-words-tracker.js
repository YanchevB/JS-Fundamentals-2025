function createWordTracker(wordsArr) {
  let wordCounts = {};
  let [trackedWordsLine, ...textWords] = wordsArr;
  let searchWords = trackedWordsLine.split(' ');

  for (let word of searchWords) {
    wordCounts[word] = 0;
  }

  for (let word of textWords) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word]++;
    }
  }

  let sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

  for (let line of sorted) {
    console.log(`${line[0]} - ${line[1]}`);
  }
}

createWordTracker([
  'this sentence',

  'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])