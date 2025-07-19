import { checkName, addNewUser, getUsers } from "./state/usersState.js";
import { renderUsersList } from "./ui/usersUi.js";

const nameInput = document.getElementById("nameInput");
const usersUl = document.getElementById("usersUl");

function render() {
  renderUsersList(usersUl, getUsers());
}

function addUser() {
  const name = nameInput.value.trim();
  if (checkName(name)) {
    addNewUser(name);
    render();
    nameInput.value = "";
  } else {
    alert("El nombre no puede estar repetido o vacío");
  }
}

export { addUser, render };
