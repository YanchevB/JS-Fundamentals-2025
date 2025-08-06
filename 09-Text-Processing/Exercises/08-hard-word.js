function solve(input) {
  let letter = input.shift();
  let wordsArr = input.shift();
  let regex = /\b_+\b/g;

  let replacedText = letter.replace(regex, (match) => {
    let correctWord = wordsArr.find(w => match.length === w.length);
    if (correctWord) {
      wordsArr.splice(wordsArr.indexOf(correctWord), 1);
      return correctWord;

    }
    return match;
  })
  console.log(replacedText);
}

solve([
  'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);