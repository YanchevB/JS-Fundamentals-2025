function createPhoneBook(inputArr) {
  let phoneBook = {};
  for (let data of inputArr) {
    let parsedData = data.split(' ');
    let [fullName, number] = parsedData;
    phoneBook[fullName] = number;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

createPhoneBook(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344'
])