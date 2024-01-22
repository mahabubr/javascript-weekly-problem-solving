// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function reduction(num) {
  const sum = num.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum;
}

const result = reduction(numbers);
console.log(result);
