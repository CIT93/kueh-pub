import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, TBL} from "./global.js";
import {saveLS, cfpData} from "./storage.js"


function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

function validateField(event) {
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
document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);

// Listen for form submission
document.getElementById('simpleForm').addEventListener('submit', function (event) {
  //Prevent default behavior
  event.preventDefault();
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNameIsValid = document.getElementById('lastName').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
      alert('Form is valid. You can proceed with submitting the form to the server.');
  }
})

FORM.addEventListener("submit", function(e){
  e.preventDefault();
 const firstName = FORM.firstname.value;
 const lastName = FORM.lastname.value;
 const houseHoldMembers = parseInt(FORM.housem.value);
 const houseSize = FORM.houses.value;
 start(firstName, lastName, houseHoldMembers, houseSize);
 saveLS(cfpData);
 renderTbl(cfpData);
 FORM.reset();
})


