function vacation(totalPeople, typeOfGroup, day) {
  let price = 0;

  switch (typeOfGroup) {
    case 'Students':
      switch (day) {
        case 'Friday':
          price = 8.45 * totalPeople
          break;
        case 'Saturday':
          price = 9.80 * totalPeople
          break;
        case 'Sunday':
          price = 10.46 * totalPeople
          break;
      }
      if (totalPeople >= 30) {
        price *= 0.85
      }
      break;
    case 'Business':
      if (totalPeople >= 100) {
        totalPeople -= 10;
      }
      switch (day) {
        case 'Friday':
          price = 10.90 * totalPeople
          break;
        case 'Saturday':
          price = 15.60 * totalPeople
          break;
        case 'Sunday':
          price = 16 * totalPeople
          break;
      }
      break;
    case 'Regular':
      switch (day) {
        case 'Friday':
          price = 15 * totalPeople
          break;
        case 'Saturday':
          price = 20 * totalPeople
          break;
        case 'Sunday':
          price = 22.50 * totalPeople
          break;
      }
      if (totalPeople >= 10 && totalPeople <= 20) {
        price *= 0.95
      }
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`)
}