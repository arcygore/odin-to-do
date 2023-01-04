const body = document.querySelector("body");

const createModalPopup = () => {
    const modalOverlay = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalForm = document.createElement("form");

    modalOverlay.classList.add("modal-overlay");
    modalContainer.classList.add("modal-container");

    body.appendChild(modalOverlay);
    body.appendChild(modalContainer);
}

const removeModalPopup = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalContainer = document.querySelector(".modal-container");
    modalOverlay.remove();
    modalContainer.remove();
}

export { createModalPopup , removeModalPopup };