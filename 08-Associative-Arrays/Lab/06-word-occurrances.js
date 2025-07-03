function countWordOccurrences(inputArr) {
  let map = new Map();
  for (let data of inputArr) {
    let word = data;
    let count = 1;

    if (!map.has(word)) {
      map.set(word, count);
    } else {
      let updatedCount = map.get(word) + 1;
      map.set(word, updatedCount);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(`${key} -> ${value} times`);
  }
}

countWordOccurrences(["Here", "is", "the", "first", "sentence",
  "Here", "is", "another", "sentence", "And",
  "finally", "the", "third", "sentence"
])