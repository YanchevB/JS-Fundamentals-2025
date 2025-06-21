function keepTrackOfTargets(inputArr) {
  let targets = inputArr.shift().split(' ').map(Number);
  
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "End") { 
      console.log(targets.join('|'));
      return; 
    }

    let [command, index, value] = inputArr[i].split(' ');
    index = Number(index);
    value = Number(value);

    if (command === 'Shoot') {
      if (index >= 0 && index < targets.length) {
        targets[index] -= value;

        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }

    } else if (command === 'Add') {
      if (index < 0 || index >= targets.length) {
        console.log('Invalid placement!');
      } else {
        targets.splice(index, 0, value);
      }

    } else if (command === 'Strike') {
      let startIndex = index - value;
      let totalValue = (value * 2) + 1

      if (startIndex < 0 || startIndex >= targets.length) {
        console.log('Strike missed!');
        continue;
      } else {
        targets.splice(startIndex, totalValue);
      }
    }
  }
}

keepTrackOfTargets([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"
]);

keepTrackOfTargets([
  "1 2 3 4 5",
  "Strike 0 1",
  "End"
]);