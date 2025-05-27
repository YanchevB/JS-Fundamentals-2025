function poundsToDollars(pounds) {
  const dollarsInPounds = 1.31;
  let dollars = pounds * dollarsInPounds;
  console.log(dollars.toFixed(3));
}

poundsToDollars(80)