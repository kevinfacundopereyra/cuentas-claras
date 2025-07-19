import { addUser, render } from "./src/services.js";

const addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener("click", addUser);

render();
