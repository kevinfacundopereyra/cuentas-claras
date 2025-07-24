class User {
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
}

export default User;
