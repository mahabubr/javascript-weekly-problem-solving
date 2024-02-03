// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const person = [
  { name: "john", age: 10, gender: "male" },
  { name: "de", age: 20, gender: "female" },
  { name: "heli", age: 30, gender: "female" },
  { name: "hela", age: 40, gender: "male" },
  { name: "mela", age: 50, gender: "male" },
  { name: "meli", age: 60, gender: "female" },
];

function modifyAge(arrObj, n) {
  for (const s of arrObj) {
    if (s.name === n) {
      s["age"] += 5;
    }
  }

  return arrObj;
}

const result = modifyAge(person, "mela");
console.log(result);
