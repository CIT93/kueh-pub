import {renderTbl} from "./render.js";
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
  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
  cfpData.push(fpObj);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else {
  SUBMIT.textContent = "Form requires first name and last name";
 }
})


//async javascript 
//let pizza

// function orderPizza(){
//   console.log('Order Pizza')
//   setTimeout(() => {
//   pizza = `🍕`
//   console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log('Pizza was ordered')
// }
// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

// function orderPizza(callback){
//   setTimeout (() => {
//     const pizza =`🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza){
//   console.log(`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`Call Qoli`)

// function thing1(){
//   //call pizza shop
// }

// function thing2(){
//   //order the pizza
// }

// function thing3(){
//   //Eat the pizza
// }

// function thing1(callback){
//   callback()
// }
// function thing2(){
//   callback()
// }
// function thing3(){
//   callback()
// }
//  thing1(()=>{
//   thing2(()=>{
//     thing3()
//   })
//  })