// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
}

const result = minMax([1]);
console.log(result);


// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]