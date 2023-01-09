import { Task, taskList } from "./task.js";
import { Project } from "./project.js";
import { removeModalPopup , createProjectForm, addSubmittedTask, addSubmittedProject, createModalPopup, createTaskForm } from "./domManipulation.js";

const listenForClicks = () => {

    document.addEventListener("click", (e) => {
        const { target } = e;

        if (target.classList.contains("add-task")) {
            createModalPopup();
            createTaskForm();
        } 
        else if (target.classList.contains("add-project")) {
            createModalPopup();
            createProjectForm();
        }
        else if (target.classList.contains("modal-overlay")) {
            removeModalPopup(); // Need to add submitting data function if it is project submit or task submit.
        }
        else if (target.classList.contains("task-submit")) {
            const taskTitle = document.querySelector("#new-task-name").value;
            const taskProject = document.querySelector("#new-task-project").value;
            const taskDescription = document.querySelector("#new-task-desc").value;
            const taskDueDate = document.querySelector("#new-task-date").value;
            const taskPriority = document.querySelector("#new-task-priority").value;

            let task = new Task(taskTitle, taskProject, taskDescription, taskDueDate, taskPriority);

            taskList.push(task);
            
            console.log(taskList)
            addSubmittedTask(task.title, task.project, task.description, task.date, task.priority);
            removeModalPopup();
        }
        // else if (target.classList.contains("project-submit")) {
        //     const projectTitle = document.querySelector("#project-name");
        //     addSubmittedProject(projectTitle.value);
        //     removeModalPopup();
        // }
        // else if (target.classList.contains("task-submit")) {
        //     const taskTitle = document.querySelector("#task-name");
        //     const taskProject = document.querySelector("#task-project");
        //     const taskDescription = document.querySelector("#task-desc")
        //     const taskDueDate = document.querySelector("#due-date");
        //     const taskPriority = document.querySelector("#task-priority");

        //     console.log(taskPriority.value);

        //     submitTask(taskTitle.value, taskProject.value, taskDescription.value, taskDueDate.value, taskPriority.value);
        //     removeModalPopup();
        // }
        })
    return;
};

export { listenForClicks };