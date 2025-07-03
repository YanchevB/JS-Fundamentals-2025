function displaySchoolGrades(inputArr) {
  let map = new Map();

  for (let data of inputArr) {
    let [firstName, ...grades] = data.split(' ');
    grades = grades.map(Number);

    if (!map.has(firstName)) {
      map.set(firstName, grades);
    } else {
      let currentGrades = map.get(firstName)
      for (let grade of grades) {
        currentGrades.push(grade);
      }  
    }
  }

  let averageGrades = new Map();

  for (let [name, grades] of map) {
    let sum = 0;
    
    for (let grade of grades) {
      sum += grade;
    }

    let average = sum / grades.length;
    averageGrades.set(name, average);
  }

  let sorted = Array.from(averageGrades).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of sorted) {
    console.log(`${key}: ${value.toFixed(2)}`);
  }
}

displaySchoolGrades(['Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6'
])