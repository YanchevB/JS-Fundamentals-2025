function printCityValues(cityData) {
  for (let [key, value] of Object.entries(cityData)) {
    console.log(`${key} -> ${value}`);
  }
}

printCityValues({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria", 
  postCode: "1000" })