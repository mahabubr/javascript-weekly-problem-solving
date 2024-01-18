// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function square(num) {
  return num * num;
}

function double(num) {
  return num + num;
}

function add(num) {
  return num + 5;
}

function result(num) {
  const s = square(num);
  const d = double(s);
  const a = add(d);

  return a;
}

const r = result(5);
console.log(r);
