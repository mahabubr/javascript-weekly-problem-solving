const words = ["apple", "banana", "orange"];

let cnt = 0;

for (let i = 0; i < words.length; i++) {
  const w = words[i];
  for (let j = 0; j < w.length; j++) {
    if (
      w[j] === "a" ||
      w[j] === "e" ||
      w[j] === "i" ||
      w[j] === "o" ||
      w[j] === "u"
    ) {
      cnt++;
    }
  }
}

console.log(cnt);
