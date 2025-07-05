function printOddOccurrences(data) {
  let wordOccurrences = new Map();
  let dataArr = data.toLowerCase().split(' ');
  let result = [];
  
  for (let word of dataArr) {
    if (!wordOccurrences.has(word)) {
      wordOccurrences.set(word, 1)
    } else {
      wordOccurrences.set(word, wordOccurrences.get(word) + 1)
    }
  }

  for (let word of wordOccurrences) {
    if (word[1] % 2 === 1) {
      result.push(word[0]);
    }
  }

  console.log(result.join(' '));
}

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');