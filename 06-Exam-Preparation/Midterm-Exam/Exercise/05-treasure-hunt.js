function manageTreasureChest(inputArr) {
  let treasureChest = inputArr.shift().split('|');
  
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "Yohoho!") { break; }

    let currentAction = inputArr[i].split(' ');
    
    let command = currentAction.shift();

    switch (command) {
      case 'Loot':
        for (let item of currentAction) {
          if (treasureChest.includes(item)) {
            continue;
          } else {
            treasureChest.unshift(item);
          }
        }
        break;
      case 'Drop':
        let index = Number(currentAction);
        if (index < 0 || index >= treasureChest.length) {
          break;
        } else {
          let itemDropped = treasureChest.splice(index, 1);
          treasureChest.push(itemDropped[0]);
        }
        break;
      case 'Steal':
        let value = Number(currentAction);
        let startingIndex = treasureChest.length - value;
        if (startingIndex < 0) {
          startingIndex = 0;
        }
        let stolenItems = treasureChest.splice(startingIndex, value).join(', ');
        console.log(stolenItems);
        break;
    }
  }
  if (treasureChest.length <= 0) {
    console.log('Failed treasure hunt.');
  } else {
    let itemLength = treasureChest.map(x => x.length);
    let sum = 0;
    for (let item of itemLength) {
      sum += item;
    }
    let treasureGain = sum / treasureChest.length;
    console.log(`Average treasure gain: ${treasureGain.toFixed(2)} pirate credits.`);
  }
}

manageTreasureChest([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!"
])

manageTreasureChest([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!"
])