import { addUser, render, calcDebt } from "./src/services.js";

const addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener("click", addUser);

const calcDebtBtn = document.getElementById("calcDebtBtn");
calcDebtBtn.addEventListener("click", calcDebt);

render();
