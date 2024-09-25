import {renderTbl} from "./render.js";
import { start } from "./cfpfunctionstart.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];


FORM.addEventListener("submit", function(e){
  e.preventDefault();
 const firstName = FORM.firstname.value;
 const lastName = FORM.lastname.value;
 const houseHoldMembers = parseInt(FORM.housem.value);
 const houseSize = FORM.houses.value;
 start(firstName, lastName, houseHoldMembers, houseSize);
 OUTPUT.innerHTML ="";
 //displayOutput();
 renderTbl(cfpData);
 FORM.reset();
})

