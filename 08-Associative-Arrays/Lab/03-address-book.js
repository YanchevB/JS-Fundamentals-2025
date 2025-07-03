function createAddressBook(inputArr) {
  let addressBook = {};
  for (let data of inputArr) {
    let parsedData = data.split(':');
    let [firstName, address] = parsedData;
    addressBook[firstName] = address;
  }

  let addressBookArr = Object.entries(addressBook)
  let sorted = addressBookArr.sort((a, b) => a[0].localeCompare(b[0]));
  
  for (let [firstName, address] of sorted) {
    console.log(`${firstName} -> ${address}`);
  }
}

createAddressBook(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd'
])