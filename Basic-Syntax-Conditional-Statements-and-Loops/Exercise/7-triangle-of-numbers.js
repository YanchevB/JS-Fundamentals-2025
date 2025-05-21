function triangleOfNumbers(n) {
  let print = '';
  for (let i = 1; i <= n; i++) { 
    print = '';
    for (let j = 0; j < i; j++) {
      print += `${i} `;
    }
    console.log(print);
  }
}

triangleOfNumbers(3);