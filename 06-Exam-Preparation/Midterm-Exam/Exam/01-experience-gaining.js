function calculateExperience(inputArr) {
  let neededExperience = inputArr.shift();
  let totalBattles = inputArr.shift();
  let totalExperience = 0;
  let battlesPassed = 0

  for (let i = 1; i <= totalBattles; i++) {
    if (totalExperience >= neededExperience) {
      console.log(`Player successfully collected his needed experience for ${battlesPassed} battles.`);
      return;
    }
    let gainedExperience = inputArr[i - 1];
    
    if (i % 3 === 0) {
      gainedExperience *= 1.15;
    }
    
    if (i % 5 === 0) {
      gainedExperience *= 0.90;
    } 
    
    if (i % 15 === 0) {
      gainedExperience *= 1.05;
    }

    totalExperience += gainedExperience;
    battlesPassed++;
  }

  if (totalExperience < neededExperience) {
    console.log(`Player was not able to collect the needed experience, ${(neededExperience - totalExperience).toFixed(2)} more needed.`);
  } else {
    console.log(`Player successfully collected his needed experience for ${battlesPassed} battles.`);
  }
}

calculateExperience([
  500,
  5,
  50,
  100,
  200,
  100,
  30
]);

calculateExperience([400,
  5,
  50,
  100,
  200,
  100,
  20]);