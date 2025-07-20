function calculateFurnitureCost(input) {
  let pattern = />>(\D+)<<(\d+(\.\d+)?)!(\d+)/;
  let totalCost = 0;
  console.log('Bought furniture:');

  for (let line of input) {
    if (line === 'Purchase') break;

    let match = line.match(pattern);

    if (match) {
      let furnitureName = match[1];
      let price = Number(match[2]);
      let quantity = Number(match[4]);

      let total = price * quantity;
      console.log(furnitureName);
      totalCost += total;
    }
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

calculateFurnitureCost(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);