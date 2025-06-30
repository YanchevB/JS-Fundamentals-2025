function printStoreProvisions(storeArr, orderArr) {
  let store = {};

  for (let i = 0; i < storeArr.length; i += 2) {
    let product = storeArr[i];
    let quantity = Number(storeArr[i + 1]);
    store[product] = quantity;
  }

  for (let i = 0; i < orderArr.length; i += 2) {
    let product = orderArr[i];
    let quantity = Number(orderArr[i + 1]);
    if (store.hasOwnProperty(product)) {
      store[product] += quantity;
    } else {
      store[product] = quantity;
    }
  }

  for (let [key, value] of Object.entries(store)) {
    console.log(`${key} -> ${value}`);
  }
}

printStoreProvisions([
  'Chips', '5', 
  'CocaCola', '9', 
  'Bananas', '14', 
  'Pasta', '4', 
  'Beer', '2'
  ],
  [
  'Flour', '44', 
  'Oil', '12', 
  'Pasta', '7',
  'Tomatoes', '70', 
  'Bananas', '30'
]);