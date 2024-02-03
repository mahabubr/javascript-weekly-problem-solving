function removeDuplicate(arr) {
  const sorting = arr.filter((item, i) => arr.indexOf(item) === i);

  let a = [];

  for (let i = 0; i < arr.length; i++) {
    a[i] = "_";
  }

  for (let i = 0; i < sorting.length; i++) {
    a[i] = sorting[i];
  }

  return a;
}

// const result = removeDuplicate([1, 1, 2]);
const result = removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(result);
