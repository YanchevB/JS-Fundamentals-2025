function calculateCarTax(inputArr) {
  let carList = inputArr.join('').split('>>');
  totalRevenue = 0;

  for (let i = 0; i < carList.length; i++) {
    let currentCar = carList[i];
    let [carType, yearsToBePaid, totalKm] = currentCar.split(' ');
    let taxToPay = 0;
    yearsToBePaid = Number(yearsToBePaid);
    totalKm = Number(totalKm)

    switch (carType) {
      case 'family': {
        let kmTax = (parseInt(totalKm / 3000)) * 12;
        let initialTax = 50;
        taxToPay += kmTax + (initialTax - (yearsToBePaid * 5));
        totalRevenue += taxToPay;
        console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
        break;
      }
      case 'heavyDuty': {
        let kmTax = (parseInt(totalKm / 9000)) * 14;
        let initialTax = 80;
        taxToPay += kmTax + (initialTax - (yearsToBePaid * 8));
        totalRevenue += taxToPay;
        console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
        break;
      }
      case 'sports': {
        let kmTax = (parseInt(totalKm / 2000)) * 18;
        let initialTax = 100;
        taxToPay += kmTax + (initialTax - (yearsToBePaid * 9));
        totalRevenue += taxToPay;
        console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
        break;
      }
      default:
        console.log('Invalid car type.');
        break;
    }
  }
  console.log(`The National Revenue Agency will collect ${totalRevenue.toFixed(2)} euros in taxes.`);
}

//calculateCarTax(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
calculateCarTax(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])