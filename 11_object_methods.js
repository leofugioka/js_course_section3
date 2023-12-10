"use strict";
const prompt = require("prompt-sync")();
const currentYear = new Date().getFullYear();

const leandro = {
  firstName: "Leandro",
  lastName: "Fugioka",
  birthYear: 1992,
  job: "Data Analyst",
  friends: ["Felps", "Marbols", "Thais"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return currentYear - this.birthYear;
  // },

  getObject: function () {
    return this;
  },

  // calcAge: function () {
  //   return currentYear - this.birthYear;
  // },

  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  getHasDriversLicense: function () {
    if (this.hasDriversLicense) {
      return `and he has a driver's license.`;
    } else {
      return `and he doesn't have a driver's license.`;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(leandro.calcAge());
console.log(leandro.getObject());
console.log(leandro.age);

// CHALLENGE
// "Leandro is a 31-years old teacher, and he has/doesn't have a driver's license."

console.log(`${leandro.firstName} is a ${leandro.calcAge()}-years old ${leandro.job}, ${leandro.getHasDriversLicense()}`);

console.log(leandro.getSummary());
