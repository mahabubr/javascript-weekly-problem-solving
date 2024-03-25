// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
  const n = arr.length;
  let sum = arr.reduce((a, b) => a + b, 0);

  const divide = sum / n;

  return Number.isInteger(divide);
}

const result = isAvgWhole([1, 3]);
console.log(result);

// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false
