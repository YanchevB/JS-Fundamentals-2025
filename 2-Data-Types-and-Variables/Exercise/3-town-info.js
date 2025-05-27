function townInfo(town, population, area) {
  let characterCount = 0;
  for (let i = 1; i < town.length; i++) {
    characterCount += i;
  }

  if (characterCount < 3) {
    console.log('Town name must be at least 3 characters!');
  }

  if (population < 0) {
    console.log('Population must be a positive number!');
  }
  
  if (area < 0) {
    console.log('Area must be a positive number!');
  } 

  if (characterCount >= 3 && population >= 0 && area >= 0) {
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
  }
}

townInfo('LA', 1481353, -512);