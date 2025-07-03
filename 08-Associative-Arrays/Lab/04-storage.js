function createStorage(inputArr) {
  let map = new Map();
  for (let data of inputArr) {
    let [product, quantity] = data.split(' ');
    quantity = Number(quantity);

    if (!map.has(product)) {
      map.set(product, quantity);
    } else {
      let currentQuantity = map.get(product);
      let updatedQuantity = currentQuantity += quantity;
      map.set(product, updatedQuantity);
    }
  }

  for (let product of map) {
    console.log(`${product[0]} -> ${product[1]}`);
  }
}

createStorage(['tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40'
])