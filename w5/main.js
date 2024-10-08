const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints
}

function start(houseHoldMembers, houseSize) {   
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePoints = determineHouseSizePts(houseSize);
const total = houseHoldPTS + houseSizePoints;
  cfpData.push({houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPTS: houseHoldPTS,
    houseSizePoints:houseSizePoints,
    total: total});
}

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.total}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS}),`;
    newP.textContent += ` and a ${obj.houseSize} size of home (score:${obj.houseSizePoints}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}
}

start(2, "apartment");
start(10, "large");
start(2, "small");
start(4, "medium");

displayOutput()

