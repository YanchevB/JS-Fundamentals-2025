function keepTrackOfShotTargets(inputArr) {
  let targets = inputArr.shift().split(' ').map(Number);
  let shotTargets = 0;

  let index = 0;
  let command = inputArr[index];
  index++;
  while (command !== 'End') {
    command = Number(command);
    if (command >= targets.length) {
      command = inputArr[index];
      index++;
      continue;
    } 

    let value = targets[command];
    targets[command] = -1;
    shotTargets++;

    for (let i = 0; i < targets.length; i++) {
      if (targets[i] === -1) {
        continue;
      }
      
      if (targets[i] > value) {
        targets[i] -= value;
      } else {
        targets[i] += value;
      }
    }

    command = inputArr[index];
    index++;
  }
  console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

keepTrackOfShotTargets([
  "24 50 36 70",
  "0",
  "4",
  "3",
  "1",
  "End"
]);