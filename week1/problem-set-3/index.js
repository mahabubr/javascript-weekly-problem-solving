class Student {
  name;
  roll;
  mark;
  constructor(n, r, m) {
    this.name = n;
    this.roll = r;
    this.mark = m;
  }

  add() {
    const name = "sompod";
    return this.name + name;
  }
}

const res = new Student("Shawon", 20, 80.5);
console.log(res.add());

// ver express = require("express")

// import express from 'express

// export const service {
//     create, update,delete
// }
