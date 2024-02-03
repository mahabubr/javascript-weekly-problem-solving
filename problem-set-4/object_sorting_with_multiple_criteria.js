// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

const products = [
  { name: "mobile", price: 100, category: "EA" },
  { name: "headphone", price: 30, category: "CB" },
  { name: "camera", price: 40, category: "FG" },
  { name: "memory", price: 80, category: "HF" },
  { name: "mouse", price: 10, category: "ER" },
  { name: "keyboard", price: 1500, category: "HJ" },
];

function objSorting(pd) {
  return pd.sort((a, b) => a.price - b.price);
}

const result = objSorting(products);
console.log(result);
