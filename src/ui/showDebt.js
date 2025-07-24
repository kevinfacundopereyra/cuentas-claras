function showDebt(usersList) {
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
        <p>Deuda por persona: $${individualDebt.toFixed(2)}</p>
        <ul style="text-align: left;">
          ${usersList
            .map(
              (user) => `
            <li><strong>${user.name}:</strong> pagó $${
                user.totalExpense
              }, debe $${(individualDebt - user.totalExpense).toFixed(2)}</li>
          `
            )
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
