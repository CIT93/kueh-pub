// how to calculate your carbon footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// method 1

// 1. Count the members of your household.
const myHousehold = 14;
// 2. Consider the size of your home.
const myHomesize = 4;
// 3. Evaluate your food choices.
const myFood = 10;
// 4. Examine your water consumption.
const myWater = 1;
// 5. Determine how many household purchases you make each year.
const myPurchases = 4;
// 6. Consider how much waste you produce.
const myWaste = 20;
// 7. Identify the amount of waste that you recycle.
const myRecycle = 8;
// 8. Tally up your annual transportation scores.
const myTransport = 32;
// 9. Add up your points.
const myTotalcarbon = myHousehold + myHomesize + myFood + myWater + myPurchases + myWaste + myRecycle + myTransport
// 10. write JS to update the rendered html (index.html) with total footprint.
const myFootprint = document.querySelector("h2"); 
myFootprint.textContent = "93";