function login(array) {
  let user = array[0];
  let correctPassword = user.split('').reverse().join('');
  let incorrectPassword = 0;

  for (let i = 1; i < array.length; i++) {
    let currentPassword = array[i];
    if (currentPassword === correctPassword) {
      console.log(`User ${user} logged in.`);
      break;
    } else if (currentPassword !== correctPassword) {
      incorrectPassword++;
        if (incorrectPassword === 4) {
          console.log(`User ${user} blocked!`);
          break;
        } else {
          console.log('Incorrect password. Try again.');
        }
    }
  }
}