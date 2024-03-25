// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

const result = sortByLength(["may", "april", "september", "august"]);
console.log(result);

// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []
