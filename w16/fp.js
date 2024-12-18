class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterValue, waterConsum, both, purchases) {
      this.first = first;
      this.last = last;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.foodChoice = foodChoice;
      this.foodSource = foodSource;
      this.waterValue = waterValue;
      this.waterConsumPoints = waterConsum;
      this.both = both;
      this.purchasesPoints = purchases;
      this.calHouseHoldPoints();
      this.calHouseSizePoints();
      this.calFoodChoicePoints();
      this.calFoodSourcePoints();
      this.calTotal();
  }
  
    calHouseHoldPoints() {
      if (this.houseMembers === 1) {
        this.houseHoldPoints = 14;
      } else if (this.houseMembers === 2) {
        this.houseHoldPoints = 12;
      } else if (this.houseMembers === 3) {
        this.houseHoldPoints = 10;
      } else if (this.houseMembers === 4) {
        this.houseHoldPoints = 8;
      } else if (this.houseMembers === 5) {
        this.houseHoldPoints = 6;
      } else if (this.houseMembers === 6) {
        this.houseHoldPoints = 4;
      } else if (this.houseMembers > 6) {
        this.houseHoldPoints = 2;
      }
    }
  
    calHouseSizePoints() {
      if (this.houseSize === "large") {
        this.houseSizePoints = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizePoints = 7;
      } else if (this.houseSize === "small") {
        this.houseSizePoints = 4;
      } else if (this.houseSize === "apt") {
        this.houseSizePoints = 2;
      } else {
        this.houseSizePoints = 0;
      }
    }
  
    calFoodChoicePoints() {
      if (this.foodChoice === "meatDaily") {
        this.foodPoints = 10;
      } else if (this.foodChoice === "meatWeekly") {
        this.foodPoints = 8;
      } else if (this.foodChoice === "vegetarian") {
        this.foodPoints = 4;
      } else if (this.foodChoice === "veganOrWild") {
        this.foodPoints = 2;
      }
    }
  
    calFoodSourcePoints() {
      if (this.foodSource === "packed") {
        this.foodSourcePoints = 12;
      } else if (this.foodSource === "balance") {
        this.foodSourcePoints = 6;
      } else if (this.foodSource === "local") {
        this.foodSourcePoints = 2;
      }
    }

  
    calTotal() {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.foodPoints +
        this.foodSourcePoints +
        this.waterConsumPoints +
        this.purchasesPoints;        
    }
  }
      
  
  
  export {FP}