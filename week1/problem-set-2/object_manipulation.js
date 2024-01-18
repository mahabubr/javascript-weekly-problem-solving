// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const person = [
  { author: "john", year: 2010, title: "romantic" },
  { author: "de", year: 2020, title: "ghost" },
  { author: "heli", year: 2030, title: "action" },
  { author: "hela", year: 2040, title: "thriller" },
  { author: "mela", year: 2050, title: "drama" },
  { author: "meli", year: 2060, title: "comedy" },
];

function getBooks(arObj) {
  const arr = [];

  arObj.map((bk) => arr.push(bk.title));

  return arr;
}

const result = getBooks(person);

console.log(result);
