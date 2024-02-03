// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const student = [
  { name: "John", grade: 4 },
  { name: "De", grade: 3.5 },
  { name: "Oliver", grade: 5 },
  { name: "Noah", grade: 4.5 },
  { name: "Amir", grade: 2.5 },
  { name: "Jack", grade: 3.2 },
  { name: "Liam", grade: 4.8 },
];

function advSorting(st) {
  return st.sort((a, b) => b.grade - a.grade);
}

const result = advSorting(student);
console.log(result);
