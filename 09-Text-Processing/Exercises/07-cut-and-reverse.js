function cutAndReverseStr(str) {
  let mid = Math.floor(str.length / 2);
  let firstHalf = str.slice(0, mid);
  let secondHalf = str.slice(mid);
  
  firstHalf = firstHalf.split('').reverse().join('');
  secondHalf = secondHalf.split('').reverse().join('');

  console.log(firstHalf);
  console.log(secondHalf);
}

cutAndReverseStr('tluciffiDsIsihTgnizamAoSsIsihT');