function findString(word, text) {
  text = text.toLowerCase();
  let textArr = text.split(' ');

  for (let currentWord of textArr) {
    if (currentWord === word) {
      console.log(word);
      break;
    }
  }

  if (!textArr.includes(word)) {
    console.log(`${word} not found!`);
  }
}

findString('python',
'JavaScript is the best programming language');