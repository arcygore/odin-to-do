import addTask from "./task.js";
import { addProjectPopup , submitProject } from "./project.js";
import { removeModalPopup , createProjectForm } from "./domManipulation.js";

const clicks = () => {

    document.addEventListener("click", (e) => {
        const { target } = e;
        console.log(target)

        if (target.classList.contains("add-task")) {
            addTask();
        } 
        else if (target.classList.contains("add-project")) {
            addProjectPopup();
        }
        else if (target.classList.contains("modal-overlay")) {
            removeModalPopup(); // Need to add submitting data function if it is project submit or task submit.
        }
        else if (target.classList.contains("project-submit")) {
            const projectTitle = document.querySelector("#projectname");

            submitProject(projectTitle.value);
            removeModalPopup();
        }
        })
    return;
};

export { clicks };