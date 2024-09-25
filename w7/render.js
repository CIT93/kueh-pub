const TBL = document.getElementById("tab-data");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

function renderTblHeading() {
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Carbon Footprint", "Action"];
  headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody); 
  TBL.appendChild(table); 
}
  
function renderTbl(data) {
  data.forEach(function(item) {
    const tr = document.createElement("tr");
    const newData = [item.firstName, item.lastName, item.houseHoldMembers, item.houseSize, item.houseMPTS, item. houseSPTS, item.cfpTotal];
    newData.forEach(function(text){
      const td = document.createElement("td")
      td.textContent = text;
      tr.appendChild(td)
    });
    const td = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    td.appendChild(editButton);
    td.appendChild(deleteButton);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
  });
}


renderTblHeading();


export {renderTbl, renderTblHeading};

//need help!!! im stuck..

  