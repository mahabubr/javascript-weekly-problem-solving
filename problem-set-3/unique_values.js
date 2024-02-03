// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const value = [10, 20, 20, 10, 30, 40, 50, 40];

function uniqueValue(val) {
  return [...new Set(val)];
}

const result = uniqueValue(value);
console.log(result);
