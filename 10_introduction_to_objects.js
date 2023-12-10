"use strict";
const prompt = require("prompt-sync")();
const currentYear = new Date().getFullYear();
const leandroArrays = ["Leandro", "Fugioka", currentYear - 1992, "Data Analyst", ["Felps", "Marbols", "Thais"]];

for (let i = 0; i < leandroArrays.length; i++) {
  console.log(leandroArrays[i]);
}

const leandro = {
  firstName: "Leandro",
  lastName: "Fugioka",
  birthYear: 1992,
  age: currentYear - 1992,
  job: "Data Analyst",
  friends: ["Felps", "Marbols", "Thais"],
};

console.log(leandro["lastName"]);

const nameKey = "Name";

console.log(leandro["first" + nameKey]);
console.log(leandro["last" + nameKey]);

const interestedIn = prompt("What do you want to know abou Leandro? Choose between firstName, lastName, age, job and friends: ");
console.log(`The ${interestedIn} information about Leandro is ${leandro[interestedIn]}`);

function verifiesInterestedIn() {
  const interestedIn = prompt("What do you want to know abou Leandro? Choose between firstName, lastName, age, job and friends: ");
  if (leandro[interestedIn]) {
    console.log(`The ${interestedIn} information about Leandro is ${leandro[interestedIn]}`);
  } else {
    console.log(`Please enter a valid answer: \n`);
    verifiesInterestedIn();
  }
}

verifiesInterestedIn();

leandro.location = "Brazil";
leandro["twitter"] = "@leofugioka";
console.log(leandro);

// Challenge
//"Leandro has 3 friends, and his best friend is called Felps"

console.log(`${leandro.firstName} has ${leandro.friends.length} friends, and his best friend is called ${leandro.friends[0]}`);
