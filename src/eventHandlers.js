import addTask from "./task.js";
import addProject from "./project.js";
import { removeModalPopup } from "./domManipulation.js";

const clicks = () => {

    document.addEventListener("click", (e) => {
        const { target } = e;
        console.log(target)

        if (target.classList.contains("add-task")) {
            addTask();
        } 
        else if (target.classList.contains("add-project")) {
            addProject();
        }
        else if (target.classList.contains("modal-overlay")) {
            removeModalPopup();
        }
        })
    return;
};

export { clicks };