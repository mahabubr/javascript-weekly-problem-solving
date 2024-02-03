function searchInsertPosition(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
    if (arr[i] > target) {
      return i;
    }
  }

  return arr.length;
}

const result = searchInsertPosition([1, 3, 5, 6], 7);
console.log(result);
