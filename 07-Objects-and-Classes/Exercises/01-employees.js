function createEmployeeList(inputArr) {
  class Employee {
    constructor (name) {
      this.name = name;
    }

    generatePersonalNumber(input) {
      return input.length;
    }
  }

  for (let employeeName of inputArr) {
    let employee = new Employee(employeeName);
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.generatePersonalNumber(employeeName)}`);
  }
}

createEmployeeList([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
]);