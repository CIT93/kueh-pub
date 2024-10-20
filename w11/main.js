import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import {FP} from "./fp.js";


const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);



FORM.addEventListener("submit", (e) => {
  e.preventDefault();
 if (FNAME.value !== '' && LNAME.value !== '') {
  SUBMIT.textContent = '';
  //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value);
  // fpObj.houseHoldPoints();
  // fpObj.houseSizePoints();
  cfpData.push(fpObj);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else {
  SUBMIT.textContent = "Form requires first name and last name";
 }
})

// const me = {
//   name: "kue",
//   haircolor: "black",
//   location: "office",
//   sleepscore: 95,
//   introduce: function(){
//     console.log(this)
//     console.log(`this is ${this.name} with ${this.haircolor} hair color is in ${this.location} right now`)
//   }
// }

// const you = {
//   name: "student",
//   haircolor: "brown",
//   location: "home",
//   sleepscore: 55,
//   introduce: function(){
//     console.log(this)
//     console.log(`this is ${this.name} with ${this.haircolor} hair color is in ${this.location} right now`)
//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce(){
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now and had sleepscore of ${this.sleepScore}`)
//   }
// }

// const kue = new Human("kue", "black", "office", 95);
// const jane = new Human("jane", "brown", "home", 55);

// kue.introduce();
// jane.introduce();
// kue.hrv = 50;