import { addUser, render } from "./src/services.js";

const addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener("click", addUser);

render();

const calcDebtBtn = document.getElementById("calcDebtBtn");
calcDebtBtn.addEventListener("click", () => {
  console.log("click desde el calcDebtBtn");
});
