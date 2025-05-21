function printAndSum(start, end) {
  let sum = 0;
  let print = ''
  for (let i = start; i <= end; i++) {
    sum += i;
    print += `${i} `
  }
  console.log(print)
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);