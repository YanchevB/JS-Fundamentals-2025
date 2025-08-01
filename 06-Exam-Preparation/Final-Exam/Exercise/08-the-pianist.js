function solve(input) {
  let endIndex = input.shift();
  let piecesArr = input.splice(0, endIndex);
  let pieces = {};

  for (let piece of piecesArr) {
    let [pieceName, composer, key] = piece.split('|');
    if (!pieces.hasOwnProperty(pieceName)) {
      pieces[pieceName] = {
        composer,
        key
      }
    } else {
      pieces[pieceName].composer = composer;
      pieces[pieceName].key = key;
    }
  }

  for (let line of input) {
    let [command, param1, param2, param3] = line.split('|');
    if (command === 'Stop') break;

    switch (command) {
      case 'Add':
        let pieceNameToAdd = param1;
        let composer = param2;
        let key = param3;

        if (!pieces.hasOwnProperty(pieceNameToAdd)) {
          pieces[pieceNameToAdd] = { composer, key }

          console.log(`${pieceNameToAdd} by ${composer} in ${key} added to the collection!`);
        } else {
          console.log(`${pieceNameToAdd} is already in the collection!`);
        }

        break;
    
      case 'Remove':
        let pieceToRemove = param1;
        if (pieces.hasOwnProperty(pieceToRemove)) {
          delete pieces[pieceToRemove];
          console.log(`Successfully removed ${pieceToRemove}!`);
        } else {
          console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
        }

        break;

      case 'ChangeKey':
        let pieceToChange = param1;
        let newKey = param2;

        if (pieces.hasOwnProperty(pieceToChange)) {
          pieces[pieceToChange].key = newKey;
          console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
        } else {
          console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
        }
        break;
    }
  }

  for (let [piece, information] of Object.entries(pieces)) {
    console.log(`${piece} -> Composer: ${information.composer}, Key: ${information.key}`);
  }
}

solve([
  4,
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
])