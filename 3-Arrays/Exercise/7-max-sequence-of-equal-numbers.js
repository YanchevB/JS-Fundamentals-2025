function maxSequence(arr) {
  let maxSequenceLength = 1;
  let maxSequenceIndex = 0;

  let currentLength = 1;
  let currentIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;
    } else {
      currentLength = 1;
      currentIndex = i;
    }

    if (currentLength > maxSequenceLength){
      maxSequenceLength = currentLength;
      maxSequenceIndex = currentIndex;
    }
  }

  let result = [];

  for (let i = maxSequenceIndex; i < maxSequenceIndex + maxSequenceLength; i++) {
    result.push(arr[i]);
  }
  console.log(result.join(' '));
}

maxSequence([2, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1]);