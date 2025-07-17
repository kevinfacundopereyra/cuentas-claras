import User from "./User.js";

const nameInput = document.getElementById("nameInput");
const usersUl = document.getElementById("usersUl");

const usersList = [new User("leo", 300, 400, 600)];

const leo = new User("leo", 300, 400, 600);
leo.viewUser();

const newUsersList = [...usersList];

function checkName(name) {
  const validName = newUsersList.some((u) => u.name === name) || name === "";
  const checkName = !validName;
  return checkName;
}

function renderUsersList() {
  usersUl.innerHTML = "";
  newUsersList.map((user) => {
    const li = document.createElement("li");
    li.className = "user-card";

    const h4 = document.createElement("h4");
    h4.textContent = user.name;
    h4.className = "user-card-h4";

    //food li
    const labelCheck = document.createElement("label");
    labelCheck.textContent = "Comio?";
    labelCheck.forHtml = "food";
    labelCheck.className = "user-card-foodlabel";

    const inputCheck = document.createElement("input");
    inputCheck.id = "food";
    inputCheck.type = "checkbox";
    inputCheck.className = "user-card-foodcheck";

    const input = document.createElement("input");
    input.type = "number";
    input.id = `foodexpense-${user.name}`;
    input.placeholder = "cuanto gasto?";
    input.className = "user-card-foodexpense";

    //drink li
    const labelCheckD = document.createElement("label");
    labelCheckD.textContent = "Escavio?";
    labelCheckD.forHtml = "drink";
    labelCheckD.className = "user-card-drinklabel";

    const inputCheckD = document.createElement("input");
    inputCheckD.id = "drink";
    inputCheckD.type = "checkbox";
    inputCheckD.className = "user-card-drinkcheck";

    const inputD = document.createElement("input");
    inputD.type = "number";
    inputD.id = `drinkexpense-${user.name}`;
    inputD.placeholder = "cuanto gasto?";
    inputD.className = "user-card-drinkexpense";

    li.appendChild(h4);
    li.appendChild(labelCheck);
    li.appendChild(inputCheck);
    li.appendChild(input);
    li.appendChild(labelCheckD);
    li.appendChild(inputCheckD);
    li.appendChild(inputD);

    usersUl.appendChild(li);
  });
}

function addUser() {
  const name = nameInput.value.trim();
  if (checkName(name)) {
    const newUser = new User(name);
    newUsersList.push(newUser);
    renderUsersList();
    nameInput.value = "";
  } else {
    console.error("error");
    alert("El nombre no puede estar repetido o vacio");
  }
}

export { addUser, renderUsersList };
