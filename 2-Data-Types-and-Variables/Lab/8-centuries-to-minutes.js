function centuriesToMinutes(centuries) {
  const daysInYear = 365.2422;
  let totalYears = centuries * 100
  let totalDays = Math.trunc(totalYears * daysInYear);
  let totalHours = totalDays * 24;
  let totalMinutes = totalHours * 60;

  console.log(`${centuries} centuries = ${totalYears} years = ${totalDays} days = ${totalHours} hours = ${totalMinutes} minutes`);
}

centuriesToMinutes(1);