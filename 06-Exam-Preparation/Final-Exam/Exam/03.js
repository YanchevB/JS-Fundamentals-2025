function solve(input) {
  let messageCapacity = Number(input.shift());
  let database = {};

  for (let line of input) {
    let [command, username, param1, param2] = line.split('=');
    if (command === 'Statistics') break;

    switch (command) {
      case 'Add':
        let sentMessages = Number(param1);
        let receivedMessages = Number(param2);

        if (!database.hasOwnProperty(username)) {
          database[username] = {
            sentMessages: Number(sentMessages),
            receivedMessages: Number(receivedMessages)
          }
        } else {
          continue;
        }
        break;
    
      case 'Message':
        let sender = username;
        let receiver = param1;

        if (database.hasOwnProperty(sender) && database.hasOwnProperty(receiver)) {
          database[sender].sentMessages ++;
          database[receiver].receivedMessages ++;

          if (database[sender].sentMessages + database[sender].receivedMessages >= messageCapacity) {
            delete database[sender];
            console.log(`${sender} reached the capacity!`);
          }

          if (database[receiver].sentMessages + database[receiver].receivedMessages >= messageCapacity) {
            delete database[receiver];
            console.log(`${receiver} reached the capacity!`);
          }
        }
        break;

      case 'Empty':
        if (username === 'All') {
          database = {};
        } else {
          delete database[username];
        }
        break;
    }
  }

  let userCount = Object.keys(database).length;
  console.log(`Users count: ${userCount}`);
  
  for (let [username, statistics] of Object.entries(database)) {
    console.log(`${username} - ${statistics.sentMessages + statistics.receivedMessages}`);
  }
}

// solve([
//   "10",
//   "Add=Berg=9=0",
//   "Add=Kevin=0=0",
//   "Message=Berg=Kevin",
//   "Add=Mark=5=4",
//   "Statistics"
// ]);

solve([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics"
])

// solve([
//   "20",
//   "Add=Mark=3=9",
//   "Add=Berry=5=5",
//   "Add=Clark=4=0",
//   "Empty=Berry",
//   "Add=Blake=9=3",
//   "Add=Michael=3=9",
//   "Add=Amy=9=9",
//   "Message=Blake=Amy",
//   "Message=Michael=Amy",
//   "Statistics"
// ]);