function calculateEnergy(inputArr) {
  let totalEnergy = Number(inputArr.shift());
  let totalWins = 0;
  let bonusCounter = 0;

  for (let i = 0; i < inputArr.length; i++) {
    let command = inputArr[i];
    if (command === 'End of battle') {
      console.log(`Won battles: ${totalWins}. Energy left: ${totalEnergy}`);
      return;
    }
    command = Number(command);

    if (totalEnergy >= command) {
      totalEnergy -= command;
      totalWins++
      bonusCounter++;

      if (bonusCounter === 3) {
        bonusCounter = 0;
        totalEnergy += totalWins
      }

    } else {
      console.log(`Not enough energy! Game ends with ${totalWins} won battles and ${totalEnergy} energy`);
      return;
    }    
  }
}

calculateEnergy([
  "100",
  "10",
  "10",
  "10",
  "1",
  "2",
  "3",
  "73",
  "10"
]);

calculateEnergy([
  "200",
  "54",
  "14",
  "28",
  "13",
  "End of battle"
]);