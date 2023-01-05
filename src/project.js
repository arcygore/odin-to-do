import { createModalPopup, createProjectForm, addSubmittedProject } from "./domManipulation.js";

const addProjectPopup = () => {
    createModalPopup();
    createProjectForm();
};

const submitProject = (title) => {
    addSubmittedProject(title);
}

export { addProjectPopup , submitProject};