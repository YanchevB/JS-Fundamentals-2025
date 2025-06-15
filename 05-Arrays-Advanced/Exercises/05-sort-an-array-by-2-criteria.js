function sortArrays(arr) {
  arr = arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }

    return a.localeCompare(b);
  })
  console.log(arr.join('\n'));
}

sortArrays(['alpha', 'beta', 'gamma']);
sortArrays(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);