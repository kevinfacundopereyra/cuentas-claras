/* class User {
  constructor(name, foodExpense = 0, drinkExpense = 0, partialDebt = 0) {
    this.name = name;
    this.foodExpense = parseInt(foodExpense) || 0;
    this.drinkExpense = parseInt(drinkExpense) || 0;
    this.partialDebt = parseInt(partialDebt) || 0;

    this.totalExpense = this.calculateTotalExpense();
  }

  calculateTotalExpense() {
    this.totalExpense = this.foodExpense + this.drinkExpense;
    return this.totalExpense;
  }

  get debt() {
    return Math.floor(this.partialDebt - this.totalExpense);
  }

  viewUser() {
    console.log(`Name: ${this.name}`);
    console.log(`Food Expense: ${this.foodExpense}`);
    console.log(`Drink Expense: ${this.drinkExpense}`);
    console.log(`Partial Debt: ${this.partialDebt}`);
    console.log(`Total Expense: ${this.totalExpense}`);
    console.log(`Debt: ${this.debt}`);
  }
} */

class User {
  constructor(
    name,
    foodExpense = 0,
    drinkExpense = 0,
    partialDebt = 0,
    foodDebt = 0,
    drinkDebt = 0,
    ate = true,
    drank = true
  ) {
    this.name = name;
    this.foodExpense = parseInt(foodExpense) || 0;
    this.drinkExpense = parseInt(drinkExpense) || 0;
    this.partialDebt = parseInt(partialDebt) || 0;
    this.totalExpense = this.calculateTotalExpense();
    this.ate = ate;
    this.drank = drank;
  }

  calculateTotalExpense() {
    this.totalExpense = this.foodExpense + this.drinkExpense;
    return this.totalExpense;
  }

  get debt() {
    return Math.floor(this.partialDebt - this.totalExpense);
  }

  get foodDebt() {
    return Math.floor(this.foodExpense - this.foodDebt);
  }

  get drinkDebt() {
    return Math.floor(this.drinkExpense - this.drinkDebt);
  }

  viewUser() {
    console.log(`Name: ${this.name}`);
    console.log(`Comió?: ${this.ate}`);
    console.log(`Escavió?: ${this.drank}`);
    console.log(`Food Expense: ${this.foodExpense}`);
    console.log(`Drink Expense: ${this.drinkExpense}`);
    console.log(`Partial Debt: ${this.partialDebt}`);
    console.log(`Total Expense: ${this.totalExpense}`);
    console.log(`Debt: ${this.debt}`);
  }
}

export default User;
