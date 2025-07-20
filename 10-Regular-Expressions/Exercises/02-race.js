function printRaceResults(input) {
  let contestants = input.shift().split(', ');
  let distances = {};
  let nameRegex = /[A-Za-z]/g;
  let distanceRegex = /[\d]/g;

  for (let line of input) {
    if (line === 'end of race') break;

    let nameMatch = line.match(nameRegex).join('');
    let distanceMatch = line.match(distanceRegex).map(Number)
      .reduce((a, b) => a + b, 0);

    if (contestants.includes(nameMatch)) {
      if (distances[nameMatch]) {
        distances[nameMatch] += distanceMatch
      } else {
        distances[nameMatch] = distanceMatch;
      }
    }
  }

  let sorted = Object.entries(distances).sort((a, b) => b[1] - a[1]).splice(0, 3);
  let places = ['1st', '2nd', '3rd'];
  
  sorted.forEach(([name], index) => {
    console.log(`${places[index]} place: ${name}`);
  })
}

printRaceResults(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])