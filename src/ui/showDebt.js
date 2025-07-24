/* function showDebt(usersList) {
  const totalExpenses = usersList.reduce(
    (acc, user) => acc + user.totalExpense,
    0
  );
  const individualDebt = totalExpenses / usersList.length;

  const modalHTML = `
    <div id="debtModal" style="
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    ">
      <div id="modalContent" style="
        background: white;
        padding: 20px;
        border-radius: 10px;
        width: 90%;
        max-width: 400px;
        text-align: center;
        position: relative;
      ">
        <h2>Total de la deuda: $${totalExpenses}</h2>
        <ul style="text-align: left;">
          ${usersList
            .map((user) => {
              let debtText =
                user.debt === 0
                  ? `<strong>no debe nada!</strong>`
                  : user.debt < 0
                  ? `<strong>hay que pagarle:</strong> $${Math.floor(
                      user.debt
                    )}`
                  : `<strong>debe:</strong> $${Math.floor(user.debt)}`;

              let ateText = user.ate ? "comió" : "no comió";
              let drankText = user.drank ? "tomó" : "no tomó";

              return `<li><strong>${user.name}:</strong>
                      pagó $${user.totalExpense},
                      ${debtText},
                      ${ateText}, ${drankText}</li>`;
            })
            .join("")}
        </ul>

        <button id="closeModalBtn" style="
          margin-top: 10px;
          padding: 8px 12px;
          background: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;">Cerrar</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("debtModal");
  const closeBtn = document.getElementById("closeModalBtn");

  const closeModal = () => {
    modal.remove();
    document.removeEventListener("keydown", escHandler);
  };

  // Cierre con botón
  closeBtn.addEventListener("click", closeModal);

  // Cierre clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Cierre con Escape
  const escHandler = (e) => {
    if (e.key === "Escape") closeModal();
  };
  document.addEventListener("keydown", escHandler);
}

export { showDebt };
 */

function showDebt(usersList) {
  const totalFood = usersList.reduce(
    (acc, user) => acc + (user.foodExpense || 0),
    0
  );
  const totalDrinks = usersList.reduce(
    (acc, user) => acc + (user.drinkExpense || 0),
    0
  );

  const eaters = usersList.filter((user) => user.ate);
  const drinkers = usersList.filter((user) => user.drank);

  const foodPerPerson = eaters.length ? totalFood / eaters.length : 0;
  const drinkPerPerson = drinkers.length ? totalDrinks / drinkers.length : 0;

  const modalHTML = `
    <div id="debtModal" style="
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    ">
      <div id="modalContent" style="
        background: white;
        padding: 20px;
        border-radius: 10px;
        width: 90%;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
      ">
        <h2>Total de la comida: $${totalFood.toFixed(2)}</h2>
        <h2>Total de la bebida: $${totalDrinks.toFixed(2)}</h2>
        <p>Deuda por persona (comida): $${foodPerPerson.toFixed(2)}</p>
        <p>Deuda por persona (bebida): $${drinkPerPerson.toFixed(2)}</p>
        <ul style="
          text-align: left;
          margin: 0;
          padding: 0;
          list-style: none;
          overflow-y: auto;
          max-height: 50vh;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
        ">
          ${usersList
            .map((user) => {
              const debtFood = user.ate
                ? foodPerPerson - (user.foodExpense || 0)
                : user.foodExpense && user.foodExpense > 0
                ? -user.foodExpense
                : 0;

              const debtDrink = user.drank
                ? drinkPerPerson - (user.drinkExpense || 0)
                : user.drinkExpense && user.drinkExpense > 0
                ? -user.drinkExpense
                : 0;

              let debtText = "";

              if (debtFood === 0 && debtDrink === 0) {
                debtText = `<strong>no debe nada!</strong>`;
              } else {
                if (debtFood !== 0) {
                  if (debtFood < 0) {
                    debtText += `<strong>hay que pagarle comida:</strong> $${Math.abs(
                      debtFood
                    ).toFixed(2)}<br>`;
                  } else {
                    debtText += `<strong>debe comida:</strong> $${debtFood.toFixed(
                      2
                    )}<br>`;
                  }
                }
                if (debtDrink !== 0) {
                  if (debtDrink < 0) {
                    debtText += `<strong>hay que pagarle bebida:</strong> $${Math.abs(
                      debtDrink
                    ).toFixed(2)}<br>`;
                  } else {
                    debtText += `<strong>debe bebida:</strong> $${debtDrink.toFixed(
                      2
                    )}<br>`;
                  }
                }
              }

              return `<li style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${
                user.name
              }:</strong>
                       pagó $${user.totalExpense.toFixed(2)},<br>
                       ${debtText}</li>`;
            })
            .join("")}
        </ul>
        <button id="closeModalBtn" style="
          margin-top: auto;
          padding: 8px 12px;
          background: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;">Cerrar</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("debtModal");
  const closeBtn = document.getElementById("closeModalBtn");

  const closeModal = () => {
    modal.remove();
    document.removeEventListener("keydown", escHandler);
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  const escHandler = (e) => {
    if (e.key === "Escape") closeModal();
  };
  document.addEventListener("keydown", escHandler);
}

export { showDebt };
