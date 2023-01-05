import { addSubmittedProject, createModalPopup , createTaskForm } from "./domManipulation.js";

export function addTaskPopup() {
    createModalPopup();
    createTaskForm();
    console.log("New Task Clicked");
};

export const submitTask = (title, project, description, date, priority) => {
    addSubmittedProject(title, project, description, date, priority);
}
