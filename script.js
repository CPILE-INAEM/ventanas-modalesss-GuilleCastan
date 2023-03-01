//Selección de los elementos del DOM
const SHOWBUTTONS = document.querySelectorAll(".show-modal");
const CLOSEBUTTON = document.querySelector(".close-modal");
const OVERLAY = document.querySelector(".overlay");
const MODAL = document.querySelector(".modal");

//Comprobar
console.log(SHOWBUTTONS, CLOSEBUTTON, OVERLAY, MODAL);

//Funciones
const showModal = function () {
  MODAL.classList.remove("hidden");
  OVERLAY.classList.remove("hidden");
};

const closeModal = function () {
  MODAL.classList.add("hidden");
  OVERLAY.classList.add("hidden");
};

//Definir eventos
SHOWBUTTONS.forEach((element) => element.addEventListener("click", showModal));
CLOSEBUTTON.addEventListener("click", closeModal);
OVERLAY.addEventListener("click", closeModal);
