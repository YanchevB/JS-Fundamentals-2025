function solve(input) {
  let numberOfCars = input.shift();
  let carsArr = input.splice(0, numberOfCars);
  let cars = {};

  for (let car of carsArr) {
    let [model, mileage, fuel] = car.split('|');
    if (!cars.hasOwnProperty(model)) {
      cars[model] = {
        mileage: Number(mileage),
        fuel: Number(fuel)
      }
    } else {
      cars[model].mileage = Number(mileage);
      cars[model].fuel = Number(fuel);
    }
  }

  for (let line of input) {
    let [command, model, param1, param2] = line.split(' : ');
    if (command === 'Stop') break;
    
    switch (command) {
      case 'Drive':
        
        break;
    
      case 'Refuel':

        break;
      
      case 'Revert':

        break;
    }
  }
}

solve([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
])