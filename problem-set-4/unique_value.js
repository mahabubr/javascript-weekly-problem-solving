// Example:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

function findUniqueElements(arr1, arr2) {
  return arr1.filter((a) => arr2.some((b) => a !== b));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = findUniqueElements(array1, array2);
console.log(result);
