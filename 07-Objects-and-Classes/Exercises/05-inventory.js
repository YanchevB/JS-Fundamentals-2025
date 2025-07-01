function createHeroInventory(inputArr) {
  let heroes = [];
  for (let hero of inputArr) {
    hero = hero.split(' / ');
    let [heroName, heroLevel, heroInventory] = hero;
    heroes.push({
      'Hero': heroName,
      'level': Number(heroLevel),
      'items': heroInventory
    })
  }

  heroes.sort((a, b) => a.level - b.level);
  for (let hero of heroes) {
    for (let [key, value] of Object.entries(hero)) {
      if (key === 'Hero') {
        console.log(`${key}: ${value}`);
      } else {
        console.log(`${key} => ${value}`);
      }
    }
  }
}

createHeroInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]);