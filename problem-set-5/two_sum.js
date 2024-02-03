function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// const result = twoSum([2, 7, 11, 15], 9);
// const result = twoSum([3, 2, 4], 6);
const result = twoSum([3, 3], 6);
console.log(result);
