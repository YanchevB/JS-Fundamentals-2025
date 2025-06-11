function requiredReading(totalPages, pagesPerHour, numberOfDays) {
  let totalHours = (totalPages / pagesPerHour) / numberOfDays;
  console.log(totalHours);
}

requiredReading(212,20,2)