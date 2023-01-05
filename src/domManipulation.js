const body = document.querySelector("body");

export const createModalPopup = () => {
    const modalOverlay = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalForm = document.createElement("form");

    modalOverlay.classList.add("modal-overlay");
    modalContainer.classList.add("modal-container");

    body.appendChild(modalOverlay);
    body.appendChild(modalContainer);
}

export const createProjectForm = () => {
    const modalContainer = document.querySelector(".modal-container");
    const addProjectForm = document.createElement("div");
    const newProjectLabel = document.createElement("label");
    const newProjectName = document.createElement("input");
    const newProjectSubmit = document.createElement("button");

    newProjectLabel.setAttribute('for', 'projectname');
    newProjectLabel.innerText = "Project Name";
    newProjectName.setAttribute('input','text');
    newProjectName.setAttribute('id', 'projectname');
    newProjectSubmit.innerText = "Add Project";
    newProjectSubmit.classList.add("project-submit");

    addProjectForm.appendChild(newProjectLabel);
    addProjectForm.appendChild(newProjectName);
    addProjectForm.appendChild(newProjectSubmit);
    modalContainer.appendChild(addProjectForm);
}

export const removeModalPopup = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalContainer = document.querySelector(".modal-container");
    modalOverlay.remove();
    modalContainer.remove();
}

export const addSubmittedProject = (title) => {
    const projectList = document.querySelector(".project-list");

    const newProjectTitle = document.createElement("li");
    newProjectTitle.classList.add("project-item");
    newProjectTitle.innerText = title;

    projectList.appendChild(newProjectTitle);
}

// export { createModalPopup , createProjectForm, removeModalPopup, addSubmittedProject };