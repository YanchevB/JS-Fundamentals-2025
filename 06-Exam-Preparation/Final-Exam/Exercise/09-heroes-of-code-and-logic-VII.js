function solve(input) {
  let totalHeroes = input.shift();
  let heroesArr = input.splice(0, totalHeroes);
  let heroes = {};

  for (let hero of heroesArr) {
    let [heroName, healthPoints, manaPoints] = hero.split(' ');
    if (!heroes.hasOwnProperty(heroName)) {
      heroes[heroName] = {
        healthPoints: Number(healthPoints),
        manaPoints: Number(manaPoints)
      }
    } else {
      heroes[heroName].healthPoints = Number(healthPoints);
      heroes[heroName].manaPoints = Number(manaPoints);
    }
  }

  for (let line of input) {
    let [command, heroName, param1, param2] = line.split(' - ');
    if (command === 'End') break;

    let currentMana = heroes[heroName].manaPoints;
    let currentHitPoints = heroes[heroName].healthPoints

    switch (command) {
      case 'CastSpell':
        let manaRequired = Number(param1);
        let spell = param2;
        
        if (currentMana >= manaRequired) {
          currentMana -= manaRequired;
          heroes[heroName].manaPoints = currentMana;

          console.log(`${heroName} has successfully cast ${spell} and now has ${currentMana} MP!`);
        } else {
          console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        }
        break;
    
      case 'TakeDamage':
        let damageTaken = Number(param1);
        let attacker = param2;
        currentHitPoints -= damageTaken;
        heroes[heroName].healthPoints = currentHitPoints;

        if (heroes[heroName].healthPoints > 0) {
          console.log(`${heroName} was hit for ${damageTaken} HP by ${attacker} and now has ${currentHitPoints} HP left!`);
        } else {
          console.log(`${heroName} has been killed by ${attacker}!`);
          delete heroes[heroName];
        }
        break;
      
      case 'Recharge':
        let manaRecharged = Number(param1);
        let actualRecharge = Math.min(manaRecharged, 200 - currentMana);
        currentMana += actualRecharge;
        heroes[heroName].manaPoints = currentMana;
        console.log(`${heroName} recharged for ${actualRecharge} MP!`);
        break;

      case 'Heal':
        let healedAmount = Number(param1);
        let actualHeal = Math.min(healedAmount, 100 - currentHitPoints);
        currentHitPoints += actualHeal;
        heroes[heroName].healthPoints = currentHitPoints;
        console.log(`${heroName} healed for ${actualHeal} HP!`);
        break;
    }
  }

  for (let [hero, stats] of Object.entries(heroes)) {
    console.log(hero);
    console.log(`  HP: ${stats.healthPoints}`);
    console.log(`  MP: ${stats.manaPoints}`);
  }
}

// solve([
//   2,
//   'Solmyr 85 120',
//   'Kyrre 99 50',
//   'Heal - Solmyr - 10',
//   'Recharge - Solmyr - 50',
//   'TakeDamage - Kyrre - 66 - Orc',
//   'CastSpell - Kyrre - 15 - ViewEarth',
//   'End'
// ])

solve([
  4,
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End'
])