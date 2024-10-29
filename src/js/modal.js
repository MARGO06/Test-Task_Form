const modalWindow = document.querySelector(".modal");
const modalBackground = document.querySelector(".background-modal");
const openButton = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");

export const openWindow = () => {
  openButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalWindow.classList.remove("hidden");
    modalBackground.classList.remove("hidden");
    document.body.classList.add("lock");
    setTimeout(() => {
      modalWindow.classList.add("show");
    }, 10);
  });
};

export const closeWindow = () => {
  buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalWindow.classList.add("hidden");
    modalBackground.classList.add("hidden");
    document.body.classList.remove("lock");
    modalWindow.classList.remove("show");
  });
};
