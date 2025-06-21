function trackBattle(inputArr) {
  let pirateShipSections = inputArr.shift().split('>').map(Number);
  let warshipSections = inputArr.shift().split('>').map(Number);
  let maximumHealth = Number(inputArr.shift());

  function checkIndex(index, arr) {
    if (index < 0 || index >= arr.length) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 'Retire') { break; }

    let currentAction = inputArr[i].split(' ');
    let command = currentAction.shift();
    currentAction = currentAction.map(Number)

    switch (command) {
      case 'Fire': {
        let [index, damage] = currentAction;

        if (!checkIndex(index, warshipSections)) {
          break;
        } 

        warshipSections[index] -= damage;
        if (warshipSections[index] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          return;
        }
        break;
      }
      case 'Defend': {
        let [startIndex, endIndex, damageTaken] = currentAction;

        if (startIndex < 0 || endIndex >= pirateShipSections.length) {
          break;
        } 

        for (let i = startIndex; i <= endIndex; i++) {
          pirateShipSections[i] -= damageTaken;
          if (pirateShipSections[i] <= 0){
            console.log('You lost! The pirate ship has sunken.');
            return;
          }
        }
        break;
      }
      case 'Repair': {
        let [index, health] = currentAction;

        if (!checkIndex(index, pirateShipSections)) {
          break;
        }

        pirateShipSections[index] += health;
        if (pirateShipSections[index] > maximumHealth) {
          pirateShipSections[index] = maximumHealth;
        }

        break;
      }
      case 'Status': 
        let repairThreshold = (maximumHealth * 20) / 100
        let repairNeeded = pirateShipSections.filter(x => x < repairThreshold);
        console.log(`${repairNeeded.length} sections need repair.`);
        break;
    }
  }
  let pirateShipSum = 0;
  let warshipSum = 0;

  for (let section of pirateShipSections) {
    pirateShipSum += section;
  }

  for (let section of warshipSections) {
    warshipSum += section;
  }

  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warshipSum}`);
}

trackBattle([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"
])

trackBattle([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire"
])