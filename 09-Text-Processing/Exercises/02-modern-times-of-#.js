function printHashtagWords(sentence) {
  let result = [];
  sentence = sentence.split(' ');
  function isValid(input) {
    return (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) 
    || (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122);
  }

  for (let word of sentence) {
    if (word.startsWith("#") && word.length > 1) {
      let allValid = true;
      for (let i = 1; i < word.length; i++) {
        if (!isValid(word[i])) {
          allValid = false;
          break;
        }
      }
      if (allValid) {
        result.push(word.substring(1));
      }
    }
  }

  for (let word of result) {
    console.log(word);
  }
}

printHashtagWords('Nowadays everyone uses # to tag a #special word in #socialMedia');