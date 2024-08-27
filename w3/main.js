function determineHouseHoldPts(numberInHousehold){
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if(numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if(numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    }else if(numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    }else if(numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    }else if(numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    }else if(numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
        console.log(`based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);            
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;



// global scope

determineHouseHoldPts(3)
determineHouseHoldPts(4)

//Consider the size of your home. A smaller home makes a smaller impact on the environment. Take the size of your home into account as you calculate your impact
//If you have a large house, then add 10 points to your score.
//If you have a medium-sized house, then add 7 points.
//If you have a small house, then add 4 points.
//If you live in an apartment, then add 2 points.

function determineHouseSizePts(homeSize){
    console.log("Calucate Home Size");
    if (homeSize === large) {
        homeSizePts = homeSizePts + 10;
    } else if (homeSize === medium) {
        homeSizePts = homeSizePts + 7;
    } else if (homeSize === small) {
        homeSizePts = homeSizePts + 4;
    } else if (homeSize === apartment) {
        homeSizePts = homeSizePts + 2;
    }
        
   console.log(`based on the size of ${homeSize} the points would be ${homeSizePts}.`);
}

let homeSizePts = 0
let large = 10
let medium = 7
let small = 4
let apartment = 2

determineHouseSizePts(small)
determineHouseSizePts(apartment)