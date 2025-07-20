function calculateBarIncome(input) {
  let pattern = /%([A-Z][a-z]+)%[^|%$.]*<(\w+)>[^.]*\|(\d+)\|[^|%$.]*?(\d+(\.\d+)?)\$/;
  let totalIncome = 0;
  
  for (let line of input) {
    if (line === 'end of shift') break;

    let match = line.match(pattern);
    if (match) {
      let customerName = match[1];
      let product = match[2];
      let quantity = parseInt(match[3]);
      let price = Number(match[4]);

      let total = quantity * price;
      totalIncome += total;

      console.log(`${customerName}: ${product} - ${total.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

calculateBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);

calculateBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);