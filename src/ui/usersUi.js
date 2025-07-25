function renderUsersList(usersUl, users) {
  usersUl.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.className = "user-card";

    const h4 = document.createElement("h4");
    h4.textContent = user.name;
    h4.className = "user-card-h4";

    const checkContainer = document.createElement("div");
    checkContainer.className = "user-card-foodcheck-container";

    const labelCheck = document.createElement("label");
    labelCheck.textContent = "¿Comió?";
    labelCheck.htmlFor = "food";
    labelCheck.className = "user-card-foodlabel";

    const inputCheck = document.createElement("input");
    inputCheck.id = "foodExpense";
    inputCheck.type = "checkbox";
    inputCheck.checked = user.ate;
    inputCheck.className = "user-card-foodcheck";

    const input = document.createElement("input");
    input.type = "number";
    input.id = `foodexpense-${user.name}`;
    input.placeholder = user.foodExpense
      ? `${user.foodExpense}`
      : "¿Cuánto gastó?";
    input.className = "user-card-foodexpense";

    const checkContainerD = document.createElement("div");
    checkContainerD.className = "user-card-drinkcheck-container";

    const labelCheckD = document.createElement("label");
    labelCheckD.textContent = "¿Escavió?";
    labelCheckD.htmlFor = "drink";
    labelCheckD.className = "user-card-drinklabel";

    const inputCheckD = document.createElement("input");
    inputCheckD.id = "drinkExpense";
    inputCheckD.type = "checkbox";
    inputCheckD.checked = user.drank;
    inputCheckD.className = "user-card-drinkcheck";

    const inputD = document.createElement("input");
    inputD.type = "number";
    inputD.id = `drinkexpense-${user.name}`;
    inputD.placeholder = user.drinkExpense
      ? `${user.drinkExpense}`
      : "¿Cuánto gastó?";
    inputD.className = "user-card-drinkexpense";

    const total = document.createElement("div");
    total.innerText = `Total: $${user.totalExpense}`;
    total.className = "user-card-total";

    checkContainer.appendChild(labelCheck);
    checkContainer.appendChild(inputCheck);
    checkContainerD.appendChild(labelCheckD);
    checkContainerD.appendChild(inputCheckD);

    li.appendChild(h4);
    li.appendChild(checkContainer);
    li.appendChild(input);
    li.appendChild(checkContainerD);
    li.appendChild(inputD);
    li.appendChild(total);

    usersUl.appendChild(li);
  });
}

export { renderUsersList };
