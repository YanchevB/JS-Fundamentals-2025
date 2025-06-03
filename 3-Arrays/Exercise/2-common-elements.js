function commonElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let currentElementArr1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let currentElementArr2 = arr2[j];
      if (currentElementArr1 === currentElementArr2) {
        console.log(currentElementArr1);
      }
    }
  }
}

commonElements(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l']
)