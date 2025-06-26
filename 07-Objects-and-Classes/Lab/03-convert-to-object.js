function convertToObject(jsonData) {
  let parsedData = JSON.parse(jsonData);

  for (let [key, value] of Object.entries(parsedData)) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');