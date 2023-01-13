import "./style.css";
import {listenForClicks} from "./eventHandlers.js"
import { myTasksJSON , myProjectsJSON , setTasksJSON , setProjectsJSON } from "./localStorageHandling.js";
import { reloadAllTasks, reloadAllProjects } from "./domManipulation";
import { taskList , setTaskList } from "./task";
import { projectList , setProjectList } from "./project";

setProjectList(JSON.parse(localStorage.getItem("myProjects")));
if (!projectList) {
    setProjectList([]);
}
// if (projectList == [null]) {
//     projectList = [];
// }

setTaskList(JSON.parse(localStorage.getItem("myTasks")));
if (!taskList) {
    setTaskList([]);
}
// if (taskList == [null]) {
//     taskList = [];
// }

console.log(projectList);
console.log(taskList)

reloadAllProjects();
reloadAllTasks();

listenForClicks();