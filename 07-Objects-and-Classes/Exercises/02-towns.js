function createTownObjects(inputArr) {
  class Town {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude;
      this.longitude = longitude;
    }

    print() {
      return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
    }
  }

  for (let i = 0; i < inputArr.length; i++) {
    let currentTown = inputArr[i].split(' | ')
    let [townName, townLatitude, townLongitude] = currentTown;
    townLatitude = Number(townLatitude).toFixed(2);
    townLongitude = Number(townLongitude).toFixed(2);

    let town = new Town(townName, townLatitude, townLongitude);
    console.log(town.print());
  }
}

createTownObjects([
  'Sofia | 42.696552 | 23.32601', 
  'Beijing | 39.913818 | 116.363625'
]);