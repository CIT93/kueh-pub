import {renderTbl} from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT, waterSelect, doubleWaterCheckbox} from "./global.js";
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


FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


waterSelect.addEventListener("change", (e) => {
  if (e.target.value === "0") { 
      doubleWaterCheckbox.checked = false; 
      doubleWaterCheckbox.disabled = true; 
  } else {
      doubleWaterCheckbox.disabled = false; 
  }
});


FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
      SUBMIT.textContent = '';

      const hasBoth = e.target.doubleWater.checked;

      const fpObj = new FP(
          FNAME.value,
          LNAME.value,
          parseInt(e.target.housem.value),
          e.target.houses.value,
          e.target.food.value,
          e.target.foodSource.value,
          parseInt(e.target.water.value),
          hasBoth
      );

      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
  } else {
      SUBMIT.textContent = "Form requires first name and last name";
  }
});