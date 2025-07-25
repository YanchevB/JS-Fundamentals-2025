function createDictionary(inputArr) {
  let dictionary = {};

  for (let line of inputArr) {
    let entry = JSON.parse(line);
    let term = Object.keys(entry)[0];
    let definition = entry[term];
    dictionary[term] = definition;
  }

  let sorted = Object.keys(dictionary).sort();

  for (let term of sorted) {
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
  }
  
}

createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])