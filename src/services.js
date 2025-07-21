import User from "./models/User.js";
import { renderUsersList } from "./ui/usersUi.js";

const nameInput = document.getElementById("nameInput");
const usersUl = document.getElementById("usersUl");

const newUsersList = [];

function render() {
  renderUsersList(usersUl, newUsersList);
}

function addUser() {
  const name = nameInput.value.trim();

  const nameExists = newUsersList.some((user) => user.name === name);

  if (name && !nameExists) {
    const newUser = new User(name);
    newUsersList.unshift(newUser);
    render();
    nameInput.value = "";
  } else {
    alert("El nombre no puede estar repetido o vacío");
    nameInput.value = "";
  }
}

export { addUser, render };
