function organizeParkingLot(inputArr) {
  let parkingLot = new Set();

  for (let i = 0; i < inputArr.length; i++) {
    let currentAction = inputArr[i].split(', ');

    let [direction, plateNumber] = currentAction;

    if (direction === 'IN') {
      parkingLot.add(plateNumber);
    } else {
      parkingLot.delete(plateNumber);
    }
  }
  
  let sorted = Array.from(parkingLot).sort()

  if (sorted.length <= 0) {
    console.log('Parking Lot is Empty');
  } else {
    for (let car of sorted) {
      console.log(car);
    }
  }
}

organizeParkingLot([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU'
])