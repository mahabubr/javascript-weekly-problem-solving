// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const person = [
  { name: "john", age: 10, gender: "male" },
  { name: "de", age: 20, gender: "female" },
  { name: "heli", age: 30, gender: "female" },
  { name: "hela", age: 40, gender: "male" },
  { name: "mela", age: 50, gender: "male" },
  { name: "meli", age: 60, gender: "female" },
];

function arrayFilter(arrObj) {
  const arr = [];
  arrObj.map((fe) => {
    if (fe.gender === "female") {
      arr.push(fe.name);
    }
  });
  return arr;
}

const result = arrayFilter(person);
console.log(result);
