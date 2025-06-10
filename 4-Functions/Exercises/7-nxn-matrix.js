function printNxnMatrix(n) {
  for (let i = 1; i <= n; i++) {
    let result = [];
    do {
      result.push(n);
    } while (result.length < n);
    console.log(result.join(' '));
  }
}

printNxnMatrix(7);