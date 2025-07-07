function makeEmployeeList(data) {
  let employeeList = new Map();

  for (let entry of data) {
    let [company, currentId] = entry.split(' -> ');
    if (!employeeList.has(company)) {
      employeeList.set(company, new Set());
    }
    let employeeId = employeeList.get(company);
    employeeId.add(currentId);
  }

  let sorted = Array.from(employeeList).sort();

  for (let [companyName, employeeIdList] of sorted) {
    console.log(`${companyName}`)
    for (let id of employeeIdList) {
      console.log(`-- ${id}`);
    }
  }
}

makeEmployeeList([
  'SoftUni -> AA12345', 
  'SoftUni -> BB12345', 
  'Microsoft -> CC12345', 
  'HP -> BB12345'
])

makeEmployeeList(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])