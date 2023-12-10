"use strict";
const currentYear = new Date().getFullYear();

const leandro = ["Leandro", "Fugioka", currentYear - 1992, "Data Analyst", ["Felps", "Thais", "Marbols"], true];

for (let i = leandro.length - 1; i >= 0; i--) {
  console.log(i, leandro[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Exercise ${exercise}`);
  for (let repetitions = 1; repetitions <= 10; repetitions++) {
    console.log(`Repetition ${exercise}-${repetitions}`);
  }
}
