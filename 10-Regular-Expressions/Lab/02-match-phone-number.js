function printMatchingNumbers(input) {
  let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

  let result = input[0].matchAll(pattern);
  let output = [];

  for (let match of result) {
    output.push(match[0]);
  }

  console.log(output.join(', '));
}

printMatchingNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);