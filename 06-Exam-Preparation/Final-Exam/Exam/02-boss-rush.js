function solve(input) {
  let numberOfInputs = Number(input.shift());
  let pattern = /\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/;

  for (let i = 0; i < numberOfInputs; i++) {
    let currentLine = input[i];
    let match = currentLine.match(pattern);
    
    if (!match) {
      console.log('Access denied!');
    } else {
      let bossName = match[1];
      let title = match[2]

      console.log(`${bossName}, The ${title}`);
      console.log(`>> Strength: ${bossName.length}`);
      console.log(`>> Armor: ${title.length}`);
    }
  }
}

solve([
  '3',
  '|PETER|:#Lead architect#',
  '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#'
]);