// Write a function that counts the number of vowels in a given string.

const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

function countVowels(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      cnt++;
    }
  }

  return cnt;
}

const result = countVowels(
  "Write a function that counts the number of vowels in a given string."
);
console.log(result);
