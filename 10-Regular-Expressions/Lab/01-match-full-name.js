function printMatchingFullNames(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let result = input.matchAll(pattern);
  let print = []
  for (let match of result) {
    print.push(match[0]);
  }

  console.log(print.join(' '));
}

printMatchingFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");