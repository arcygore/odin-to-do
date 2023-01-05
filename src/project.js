import { createModalPopup, createProjectForm, addSubmittedProject } from "./domManipulation.js";

const newProjectList = [];

const addProjectPopup = () => {
    createModalPopup();
    createProjectForm();
    console.log("New Project Clicked");
};

const submitProject = (title) => {
    addSubmittedProject(title);
}

export { addProjectPopup , submitProject };