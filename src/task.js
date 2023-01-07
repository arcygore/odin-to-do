let taskList = [];

class Task {
    constructor(title, project, description, date, priority) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}

export { Task , taskList };
















// import { addSubmittedProject, addSubmittedTask, createModalPopup , createTaskForm } from "./domManipulation.js";

// export const addTaskPopup = () => {
//     createModalPopup();
//     createTaskForm();
//     console.log("New Task Clicked");
// };

// export const submitTask = (title, project, description, date, priority) => {
//     addSubmittedTask(title, project, description, date, priority);
// }
