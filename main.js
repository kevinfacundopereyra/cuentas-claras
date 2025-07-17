import { addUser, renderUsersList } from "./services.js";

const addUserBtn = document.getElementById("addUserBtn");

renderUsersList();
addUserBtn.addEventListener("click", addUser);
