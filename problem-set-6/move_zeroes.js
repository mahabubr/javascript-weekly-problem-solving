function moveZeros(arr) {
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount++;
      arr.splice(i, 1);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    arr.push(0);
  }

  return arr;
}

const arr = [0, 1, 0, 3, 12];

const result = moveZeros(arr);
console.log(result);
