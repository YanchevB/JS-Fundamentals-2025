function extractFoodInfo(input) {
  let pattern = /([#|])(?<product>[A-Za-z ]+)\1(?<expiry>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let caloriePattern = /([#|])[A-Za-z ]+\1\d{2}\/\d{2}\/\d{2}\1(\d{1,5})\1/g
  let resultCalories = input[0].matchAll(caloriePattern);
  let result = input[0].matchAll(pattern);
  let totalCalories = 0;
  
  for (let match of resultCalories) {
    let calories = Number(match[2]);
    totalCalories += calories;
  }
  console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

  for (let match of result) {
    let product = match.groups['product'];
    let expiry = match.groups['expiry'];
    let calories = Number(match.groups['calories']);
    console.log(`Item: ${product}, Best before: ${expiry}, Nutrition: ${calories}`)
  }
}

extractFoodInfo([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])