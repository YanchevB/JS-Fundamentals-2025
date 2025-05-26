function rightPlace(str, char, result) {
  let final = str.replace('_', char);
  if (result === final) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}