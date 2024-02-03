// Write a function that determines whether a given year is a leap year.

function leadYearChecker(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is lead year : ", year);
  } else {
    console.log("Not Leap Year : ", year);
  }
}

leadYearChecker(2022);
leadYearChecker(2020);
leadYearChecker(2024);
leadYearChecker(2018);
