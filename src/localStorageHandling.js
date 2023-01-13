let myTasksJSON;
let myProjectsJSON;

function setTasksJSON(taskArray) {
    myTasksJSON = JSON.stringify(taskArray);
    localStorage.setItem("myTasks", myTasksJSON);
}

function setProjectsJSON(projectArray) {
    myProjectsJSON = JSON.stringify(projectArray);
    localStorage.setItem("myProjects", myProjectsJSON);
}


export { myTasksJSON , myProjectsJSON , setTasksJSON , setProjectsJSON }