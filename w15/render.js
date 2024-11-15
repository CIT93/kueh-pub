import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
import { calculateAverageFootprint } from "./cfpaverage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Food Choice", "Carbon Footprint", "Action"];
  headingTextArr.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener(`click`, () => {
      onUpdate(index, data);
  });

  btnEdit.addEventListener(`click`, () => {
      FORM[1].value = obj.first;
      FORM[2].value = obj.last;
      FORM[3].value = obj.houseMembers;
      FORM[4].value = obj.houseSize;
      FORM[5].value = obj.foodChoice;
      onUpdate(index, data);
  });
  return td;
};

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
      const tr = document.createElement("tr");
      const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];
      keys.forEach(key => {
          const td = document.createElement("td");
          td.textContent = obj[key];
          tr.appendChild(td);
      });

      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });

  return tbody;
};

const addAverageRow = (table, data) => {
  if (data.length < 2) return; // No average unless there's more then 2 data

  const tfoot = document.createElement("tfoot");
  const tr = document.createElement("tr");

  // Create a Blank cell 
  const avgLabelCell = document.createElement("td");
  const avgLabelCell2 = document.createElement("td");
  const avgLabelCell3 = document.createElement("td");
  tr.appendChild(avgLabelCell);
  tr.appendChild(avgLabelCell2);
  tr.appendChild(avgLabelCell3);

    // Create a cell for the average label
    const avgLabelCell4 = document.createElement("td");
    avgLabelCell4.textContent = "Average Carbon Footprint";
    avgLabelCell4.style.fontWeight = "bold";
    tr.appendChild(avgLabelCell4);

  // Create a cell for the average value
  const avgValueCell = document.createElement("td");
  const average = calculateAverageFootprint(data);
  avgValueCell.textContent = average;
  avgValueCell.style.fontWeight = "bold";
  tr.appendChild(avgValueCell);

  // Add an empty cell for the action column
  const emptyCell = document.createElement("td");
  tr.appendChild(emptyCell);

  tfoot.appendChild(tr);
  table.appendChild(tfoot);
};

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
      const table = renderTblHeading();
      const tbody = renderTblBody(data);
      table.appendChild(tbody);

      // Add the average row
      addAverageRow(table, data);

      TBL.appendChild(table);
  }
};

export { renderTbl };