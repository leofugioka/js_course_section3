"use strict";
const currentYear = new Date().getFullYear();

const leandro = ["Leandro", "Fugioka", currentYear - 1992, "Data Analyst", ["Felps", "Thais", "Marbols"], true];

for (let i = 0; i < leandro.length; i++) {
  console.log(leandro[i], typeof leandro[i]);
}

// Create a new Array that contains the type of each array value of 'leandro'

const typesOfLeandro = [];

for (let i = 0; i < leandro.length; i++) {
  // typesOfLeandro[i] = typeof leandro[i];
  typesOfLeandro.push(typeof leandro[i]);
}

console.log(typesOfLeandro);

const birthYears = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(currentYear - birthYears[i]);
}

console.log(ages);

// Continue and break
