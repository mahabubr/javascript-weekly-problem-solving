// Write a function that takes an array of numbers and returns the maximum value.

const value = [10, 20, 30, 40, 500, 60, 70, 80, 90, 100];

function maxValue(val) {
  return val.sort((a, b) => b - a)[0];
}

const result = maxValue(value);
console.log(result);
