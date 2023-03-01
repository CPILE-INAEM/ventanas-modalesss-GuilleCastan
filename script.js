//Selección de los elementos del DOM
//const SHOWBUTTONS = document.querySelectorAll(".show-modal");
const BTNSHOWMODAL = document.querySelector("#botones");
const CLOSEBUTTON = document.querySelector(".close-modal");
const OVERLAY = document.querySelector(".overlay");
const MODAL = document.querySelector(".modal");

//Funciones
const showModal = function (e) {
  console.log(e, e.target);
  if (e.target.classList.contains("show-modal")) {
    MODAL.classList.remove("hidden");
    OVERLAY.classList.remove("hidden");
  }
};

const closeModal = function () {
  MODAL.classList.add("hidden");
  OVERLAY.classList.add("hidden");
};

//Definir eventos
BTNSHOWMODAL.addEventListener("click", showModal);
CLOSEBUTTON.addEventListener("click", closeModal);
OVERLAY.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !MODAL.classList.contains("hidden")) {
    closeModal();
  }
  e.stopPropagation();
});
