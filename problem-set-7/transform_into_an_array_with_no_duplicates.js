// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

function set(arr) {
  return arr.filter((item, i) => arr.indexOf(item) === i);
}

const result = set([3, 3, 3, 2, 1]);
console.log(result);

// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
