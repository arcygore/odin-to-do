import { createModalPopup, createProjectForm, addSubmittedProject } from "./domManipulation.js";

class Project {
    constructor(title) {
        this.title = title;
    }
}

export { Project };

// const addProjectPopup = () => {
//     createModalPopup();
//     createProjectForm();
// };

// const submitProject = (title) => {
//     addSubmittedProject(title);
// }

// export { addProjectPopup , submitProject};