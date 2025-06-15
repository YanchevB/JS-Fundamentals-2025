function createTrain(arr) {
  let wagons = arr.shift().split(' ').map(Number);
  let maxCapacity = arr.shift().split(' ').map(Number);
  
  for (let i = 0; i < arr.length; i++) {
    let [command, firstNum] = 
        arr[i].split(' ');
    firstNum = Number(firstNum);

    if (command.includes('Add')) {
      wagons.push(firstNum);
    } else {
      let command = Number(arr[i]);

      for (let j = 0; j < wagons.length; j++) {
        if (command + wagons[j] <= maxCapacity) {
          wagons[j] += command;
          break;
        } else {
          continue;
        }
      }
    }
  }

  console.log(wagons.join(' '));
}

createTrain(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75'])

createTrain(['0 0 0 10 2 4',
  '10',
  'Add 10',
  '10',
  '10',
  '10',
  '8',
  '6'])