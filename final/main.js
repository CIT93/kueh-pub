import { renderTbl } from "./render.js";
import { FORM } from "./global.js";
import { saveLS, sleepWorkoutData } from "./storage.js";
import { SleepWorkout } from "./SleepWorkout.js";

renderTbl(sleepWorkoutData);

const validateField = (event) => {
    const field = event.target;
    const fieldId = field.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field.value === '') {
        fieldError.textContent = `${fieldId} is required`;
        field.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        field.classList.remove('invalid');
    }
};

document.getElementById("today").addEventListener('blur', validateField);
document.getElementById("sleep").addEventListener('blur', validateField);
document.getElementById("naps").addEventListener('blur', validateField);
document.getElementById("workLoad").addEventListener('blur', validateField);

FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    const today = FORM.today.value;
    const sleep = parseFloat(FORM.sleep.value);
    const naps = parseFloat(FORM.naps.value || 0);
    const workLoad = FORM.workLoad.value;
    const dayType = FORM.dayType.value;

    const sleepWorkout = new SleepWorkout(today, dayType, sleep, naps, workLoad);
    const dataObj = sleepWorkout.run();

    sleepWorkoutData.push(dataObj);
    saveLS(sleepWorkoutData);
    renderTbl(sleepWorkoutData);
    FORM.reset();
});