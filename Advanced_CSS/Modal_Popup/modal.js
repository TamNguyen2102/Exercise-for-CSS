const openModalButton = document.querySelectorAll("[modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modal = document.querySelectorAll(".modal.active");
  modal.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
