function printMatchingDates(input) {
  let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

  let result = input[0].matchAll(pattern);

  for (let match of result) {
    let day = match.groups['day'];
    let month = match.groups['month'];
    let year = match.groups['year'];

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

printMatchingDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);