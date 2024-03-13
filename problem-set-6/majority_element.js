function majorityElement(arr) {
  let cnt = [];

  for (let i = 0; i < arr.length; i++) {
    cnt[arr[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    cnt[arr[i]]++;
  }

  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] > arr.length / 2) {
      return i;
    }
  }

  return 0;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(arr);
console.log(result);
