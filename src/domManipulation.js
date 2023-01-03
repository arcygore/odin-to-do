const body = document.querySelector("body");

const createModalPopup = () => {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container")
    return body.appendChild(modalContainer);
}

export { createModalPopup };