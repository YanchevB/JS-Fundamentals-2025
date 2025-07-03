function scheduleMeetings(inputArr) {
  let meetingCalendar = {};
  for (let data of inputArr) {
    let parsedData = data.split(' ');
    let [day, person] = parsedData;

    if (meetingCalendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingCalendar[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let key in meetingCalendar) {
    console.log(`${key} -> ${meetingCalendar[key]}`);
  }
}

scheduleMeetings(['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim'
])