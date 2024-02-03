function threeSum(arr) {
  let sum = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (i != j && i != k && j != k && arr[i] + arr[j] + arr[k] === 0) {
          sum.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  sum.sort((a, b) => a - b);

  const sumRes = new Set(sum.map(JSON.stringify));

  return Array.from(sumRes).map(JSON.parse);
}

const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
