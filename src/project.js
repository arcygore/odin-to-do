let projectList = [];

class Project {
    constructor(title) {
        this.title = title;
    }
}

function setProjectList(parsedJSON) {
    projectList = parsedJSON;
}

export { Project , projectList , setProjectList };





















// import { createModalPopup, createProjectForm, addSubmittedProject } from "./domManipulation.js";

// const addProjectPopup = () => {
//     createModalPopup();
//     createProjectForm();
// };

// const submitProject = (title) => {
//     addSubmittedProject(title);
// }

// export { addProjectPopup , submitProject};