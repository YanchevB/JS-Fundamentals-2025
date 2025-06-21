function calculatePlunder(inputArr) {
  inputArr = inputArr.map(Number);
  let totalDays = inputArr[0];
  let expectedPlunder = inputArr[2];
  let totalPlunder = 0;

  for (let i = 1; i <= totalDays; i++) {
    let plunderPerDay = inputArr[1];

    if (i % 3 === 0) {
      plunderPerDay *= 1.5;
    }

    totalPlunder += plunderPerDay;
    
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }    
  }

  let percentagePlunder = (totalPlunder / expectedPlunder) * 100;

  if (expectedPlunder > totalPlunder) {
    console.log(`Collected only ${percentagePlunder.toFixed(2)}% of the plunder.`);
  } else {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  }
}

calculatePlunder([
  "5",
  "40",
  "100"
]);

calculatePlunder([
  "10",
  "20",
  "380"
]);
  