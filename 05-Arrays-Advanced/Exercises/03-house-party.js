function printGuestList(arr) {
  let guestList = [];
  
  function isGoing(input) {
    if (input.includes('not')) {
      return false;
    } else {
      return true;
    }
  }

  for (let input of arr) {
    let guestName = input.split(' ').shift();
    input = input.split(' ');

    if (isGoing(input)) {

      if (guestList.includes(guestName)) {
        console.log(`${guestName} is already in the list!`);
      } else {
        guestList.push(guestName);
      }
    } else {

      if (!guestList.includes(guestName)) {
        console.log(`${guestName} is not in the list!`);
      } else {
        let index = guestList.indexOf(guestName);
        guestList.splice(index, 1);
      }
    }
  }
  
  console.log(guestList.join('\n'));
}

printGuestList([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!']);

printGuestList([
  'Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!'])