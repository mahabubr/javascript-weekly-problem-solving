// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
const product = [
  { name: "Mouse", qty: 10, price: 2255 },
  { name: "Keyboard", qty: 20, price: 6760 },
  { name: "Monitor", qty: 30, price: 2322 },
  { name: "Webcam", qty: 40, price: 5544 },
  { name: "Desktop", qty: 50, price: 7000 },
  { name: "Speaker", qty: 60, price: 3000 },
];

function funProgram(pd) {
  return pd.reduce((acc, cur) => {
    const qty = acc + cur.qty;
    const price = acc + cur.price;
    return qty + price;
  }, 0);
}

const result = funProgram(product);
console.log(result);
