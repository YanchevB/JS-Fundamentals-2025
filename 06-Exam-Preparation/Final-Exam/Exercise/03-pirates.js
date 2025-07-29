function solve(input) {
  let cities = {};
  let endIndex = input.indexOf('Sail');
  let citiesArr = input.splice(0, endIndex + 1);
  
  for (let city of citiesArr) {
    if (city === 'Sail') break;
    let [cityName, population, gold] = city.split('||');
    if (!cities.hasOwnProperty(cityName)) {
      cities[cityName] = {
        population: Number(population),
        gold: Number(gold),
      }
    } else {
      cities[cityName].population += Number(population);
      cities[cityName].gold += Number(gold);
    }
  }
  
  for (let command of input) {
    if (command === 'End') break;

    let [currentCommand, cityName, param1, param2] = command.split('=>');
    switch (currentCommand) {
      case 'Plunder':
        let population = Number(param1);
        let goldStolen = Number(param2);
        cities[cityName].population -= population;
        cities[cityName].gold -= goldStolen;
        console.log(`${cityName} plundered! ${goldStolen} gold stolen, ${population} citizens killed.`);

        if (cities[cityName].population <= 0 || cities[cityName].gold <= 0) {
          delete cities[cityName];
          console.log(`${cityName} has been wiped off the map!`); 
        }
        break;
    
      case 'Prosper':
        let gold = Number(param1);
        if (gold < 0) {
          console.log('Gold added cannot be a negative number!');
          continue;
        } else {
          cities[cityName].gold += gold;
          console.log(`${gold} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`);
        }
        break;
    }
  }

  let numberOfCities = Object.keys(cities).length;

  if (numberOfCities <= 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  } else {
    console.log(`Ahoy, Captain! There are ${numberOfCities} wealthy settlements to go to:`);
    for (let [city, value] of Object.entries(cities)) {
      console.log(`${city} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
    }
  }
}

// solve([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End"
// ])

solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"
])