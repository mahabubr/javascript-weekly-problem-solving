// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

const arr1 = [10, 20, 30, 40, 50];
const arr2 = [10, 30, 50, 60, 70];

function arrIntersection(ar1, ar2) {
  return ar1.filter((a) => ar2.some((b) => a === b));
}

const result = arrIntersection(arr1, arr2);
console.log(result);
