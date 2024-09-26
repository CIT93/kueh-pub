const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    TBL.innerHTML = ""
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    //const headingTextArr = ["Name", "HouseHold", "HouseSize", "Carbon Footprint", "Action"]
    const headingTextArr = ["Name", "Carbon Footprint"];
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }
  
  function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    
    //const trTextArr = ["kue", 3, "large", 20];
    data.forEach(function(obj){
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = obj.firstName;
      const tdTotal = document.createElement("td");
      tdTotal.textContent = obj.cfpTotal;
      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
      tbody.appendChild(tr);
    })
    // const td = document.createElement("td");
    // const editButton = document.createElement("button");
    // const deleteButton = document.createElement("button");
    // editButton.textContent = "Edit";
    // deleteButton.textContent = "Delete";
    // td.appendChild(editButton);
    // td.appendChild(deleteButton);
    // tr.appendChild(td);
    //tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
  export {renderTbl, renderTblHeading};