function bitcoinMining(input) {
  const bitcoinValue = 11949.16;
  const gramOfGold = 67.51;

  let totalBitcoins = 0;
  let dayBitcoinIsBought = 0;
  let dayIsDocumented = false;
  let currentDay = 1;
  let totalMoney = 0;

  let bitcoinBought = false;

  for (let i = 0; i < input.length; i++) {
    let gramsMined = input[i];

    if (currentDay % 3 === 0) {
      gramsMined *= 0.70;
    }

    totalMoney += gramsMined * gramOfGold;

    if (totalMoney >= bitcoinValue) {
      while (totalMoney >= bitcoinValue) {
        totalMoney -= bitcoinValue;
        totalBitcoins++;
      }
      bitcoinBought = true;
      if (bitcoinBought && !dayIsDocumented) {
        dayBitcoinIsBought += currentDay;
        dayIsDocumented = true;
      }
    }
    currentDay++;
  }

  console.log(`Bought bitcoins: ${totalBitcoins}`);
  if (bitcoinBought) {
    console.log(`Day of the first purchased bitcoin: ${dayBitcoinIsBought}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);