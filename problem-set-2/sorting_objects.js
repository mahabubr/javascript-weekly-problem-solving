// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "BMW", model: "BM-01", year: 2010 },
  { make: "Tesla", model: "TS-02", year: 2000 },
  { make: "Google", model: "GO-44", year: 2018 },
  { make: "Facebook", model: "FA-22", year: 2012 },
  { make: "Meta", model: "ME-55", year: 2013 },
  { make: "Microsoft", model: "MI-47", year: 2005 },
];

function sortByYear(arrObj) {
  arrObj.sort((a, b) => a.year - b.year);
  return arrObj;
}

const result = sortByYear(cars);
console.log(result);
