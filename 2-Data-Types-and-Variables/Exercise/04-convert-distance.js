function convertDistance(meters) {
  const metersToKm = 1000;
  const milesInKm = 0.62137;
  let kilometersResult = meters/metersToKm;
  let milesResult = milesInKm * kilometersResult
  console.log(`${meters} meters is equal to ${kilometersResult} kilometers.`);
  console.log(`${kilometersResult} kilometers is equal to ${(milesResult).toFixed(2)} miles.`);
}

convertDistance(798);