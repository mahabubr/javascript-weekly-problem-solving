// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
  { name: "25CR", purchases: 1, loyaltyPoints: 20 },
  { name: "28CR", purchases: 8, loyaltyPoints: 25 },
  { name: "29CR", purchases: 5, loyaltyPoints: 18 },
  { name: "30CR", purchases: 10, loyaltyPoints: 24 },
  { name: "31CR", purchases: 6, loyaltyPoints: 16 },
  { name: "32CR", purchases: 3, loyaltyPoints: 8 },
];

function objectTransform(cus) {
  let arr = [];
  for (const c of cus) {
    if (c.purchases >= 5) {
      arr.push(c.loyaltyPoints * 2);
    }
  }

  return arr;
}

const result = objectTransform(customers);
console.log(result);
