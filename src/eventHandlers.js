import { addTaskPopup , submitTask } from "./task.js";
import { addProjectPopup , submitProject } from "./project.js";
import { removeModalPopup , createProjectForm } from "./domManipulation.js";

const listenForClicks = () => {

    document.addEventListener("click", (e) => {
        const { target } = e;
        console.log(target)

        if (target.classList.contains("add-task")) {
            addTaskPopup();
        } 
        else if (target.classList.contains("add-project")) {
            addProjectPopup();
        }
        else if (target.classList.contains("modal-overlay")) {
            removeModalPopup(); // Need to add submitting data function if it is project submit or task submit.
        }
        else if (target.classList.contains("project-submit")) {
            const projectTitle = document.querySelector("#project-name");

            submitProject(projectTitle.value);
            removeModalPopup();
        }
        else if (target.classList.contains("task-submit")) {
            const taskTitle = document.querySelector("#task-name");
            const taskProject = document.querySelector("#task-project");
            const taskDescription = document.querySelector("#task-desc")
            const taskDueDate = document.querySelector("#due-date");
            const taskPriority = document.querySelector("#task-priority");

            console.log(taskTitle.value);

            submitTask(taskTitle.value, taskProject.value, taskDescription.value, taskDueDate.value, taskPriority.value);
            removeModalPopup();
        }
        })
    return;
};

export { listenForClicks };