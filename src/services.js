import User from "./models/User.js";
import { renderUsersList } from "./ui/usersUi.js";
import { showDebt } from "./ui/showDebt.js";

const nameInput = document.getElementById("nameInput");
const usersUl = document.getElementById("usersUl");
const foodExpenseInput = document.getElementById("foodExpense");
const drinkExpenseInput = document.getElementById("drinkExpense");

const newUsersList = [];

function render() {
  renderUsersList(usersUl, newUsersList);
}

function sanitizeInput(value) {
  const num = parseInt(value);
  return Number.isInteger(num) && num >= 0 ? num : 0;
}

foodExpenseInput.addEventListener("input", (e) => {
  e.target.value = sanitizeInput(e.target.value);
});

drinkExpenseInput.addEventListener("input", (e) => {
  e.target.value = sanitizeInput(e.target.value);
});

function addUser() {
  const name = nameInput.value.trim();

  const foodExpense = sanitizeInput(foodExpenseInput.value);
  const drinkExpense = sanitizeInput(drinkExpenseInput.value);

  const nameExists = newUsersList.some((user) => user.name === name);

  if (name && !nameExists) {
    const newUser = new User(name, foodExpense, drinkExpense);
    newUsersList.unshift(newUser);
    newUser.viewUser();
    render();
    nameInput.value = "";
    foodExpenseInput.value = "";
    drinkExpenseInput.value = "";
  } else {
    alert("El nombre no puede estar repetido o vacío");
    nameInput.value = "";
  }
}

function calcDebt() {
  const totalExpenses = newUsersList.reduce(
    (acc, user) => acc + user.totalExpense,
    0
  );
  const individualDebt = totalExpenses / newUsersList.length;
  newUsersList.forEach((user) => {
    user.partialDebt = individualDebt;
    user.viewUser();
  });
  showDebt(newUsersList);
}

export { addUser, render, calcDebt };
