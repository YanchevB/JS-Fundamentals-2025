function organizePhoneShop(inputArr) {
  let currentStorage = inputArr.shift().split(', ');
  
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 'End') {
      console.log(currentStorage.join(', '));
      return;
    }
    let currentAction = inputArr[i].split(' ');
    let [command] = currentAction;

    switch (command) {
      case 'Add': {
        let [ , , phone] = currentAction;

        if (!currentStorage.includes(phone)) {
          currentStorage.push(phone);
        } else {
          break;
        }

        break;
      }
      case 'Remove': {
        let [ , , phone] = currentAction;
        let index = currentStorage.indexOf(phone);

        if (currentStorage.includes(phone)) {
          currentStorage.splice(index, 1);
        } else {
          break;
        }

        break;
      }
      case 'Bonus': {
        let phones = currentAction.pop().split(':');
        let [oldPhone, newPhone] = phones;
        let index = currentStorage.indexOf(oldPhone) + 1;

        if (currentStorage.includes(oldPhone)) {
          currentStorage.splice(index, 0, newPhone);
        } else {
          break;
        }

        break;
      }
      case 'Last': {
        let [ , , phone] = currentAction;
        let index = currentStorage.indexOf(phone);

        if (currentStorage.includes(phone)) {
          currentStorage.splice(index, 1);
          currentStorage.push(phone);
        }
        break;
      }
    }
  }
}

// organizePhoneShop([
//   "SamsungA50, MotorolaG5, IphoneSE",
//   "Add - Iphone10",
//   "Remove - IphoneSE",
//   "End"
// ])

organizePhoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End"
])  

// organizePhoneShop([
//   "SamsungA50, MotorolaG5, HuaweiP10",
//   "Last - SamsungA50",
//   "Add - MotorolaG5",
//   "End"
// ])