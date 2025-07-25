function validateBarcode(input) {
  let totalBarcode = Number(input.shift());
  let regex = /@#+([A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/;
  let digitRegex = /\d+/g;
  for (let i = 0; i < totalBarcode; i++) {
    let currentBarcode = input[i];
    let match = currentBarcode.match(regex);

    if (match) {
      let productGroup = currentBarcode.match(digitRegex);

      if (productGroup === null) {
        productGroup = '00';
      } else {
        productGroup = productGroup.join('');
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}

validateBarcode([
  "3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"
]);

validateBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"
]);