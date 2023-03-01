//Selección de los elementos del DOM
const SHOWBUTTONS = document.querySelectorAll(".show-modal");
const CLOSEBUTTON = document.querySelector(".close-modal");
const OVERLAY = document.querySelector(".overlay");
const MODAL = document.querySelector(".modal");

//Comprobar
console.log(SHOWBUTTONS, CLOSEBUTTON, OVERLAY, MODAL);

//Funciones
function showModal() {
  MODAL.classList.remove("hidden");
  OVERLAY.classList.remove("hidden");
}

function closeModal() {
  MODAL.classList.add("hidden");
  OVERLAY.classList.add("hidden");
}

//Añadir funcionalidades
SHOWBUTTONS.forEach((element) => {
  element.addEventListener("click", showModal);
});

CLOSEBUTTON.addEventListener("click", closeModal);
