function calculateCardPoints(inputArr) {
  let players = new Map();

  for (let data of inputArr) {
    let [personName, cards] = data.split(': ');
    cards = cards.split(', ');
    
    if (!players.has(personName)) {
      players.set(personName, new Set());
    } 

    let playerCards = players.get(personName);
    for (let card of cards) {
      playerCards.add(card);
    }
  }
  
  const power = {
    '1': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }

  const type = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
  }

  function returnCardValue(card) {
    let cardPower = card[0];
    let cardType = card[1] === '0' ? card[2] : card[1];

    Number(cardPower) >= 2 && Number(cardPower) <= 9 ? cardPower = Number(cardPower) 
    : cardPower = power[cardPower];
    
    return cardPower * type[cardType];
  }

  for (let [playerName, playerHand] of players) {
    let totalPoints = 0;

    for (let currentHand of playerHand) {
      let totalCardValue = returnCardValue(currentHand);
      totalPoints += totalCardValue;
    }

    console.log(`${playerName}: ${totalPoints}`);
  }
}

calculateCardPoints([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'
])