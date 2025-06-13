function printSequence(n, k) {
  let sequence = [1];
  for (let i = 1; i < n; i++) {
    let startIndex = i - k;

    if (startIndex < 0) {
      startIndex = 0;
    }

    let previousThreeNumbers = sequence.slice(startIndex, i);

    let sum = 0;

    for (let num of previousThreeNumbers) {
      sum += num;
    }

    sequence[i] = sum;
  }
  console.log(sequence.join(' '));
}

printSequence(6, 3);