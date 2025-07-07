function createMiningYield(data) {
  let yield = new Map();

  for (let i = 0; i < data.length; i += 2) {
    let resource = data[i];
    let quantity = Number(data[i + 1]);

    if (!yield.has(resource)) {
      yield.set(resource, quantity);
    } else {
      yield.set(resource, yield.get(resource) + quantity);
    }
  }

  for (let [resource, quantity] of yield) {
    console.log(`${resource} -> ${quantity}`);
  }
}

createMiningYield([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'
])