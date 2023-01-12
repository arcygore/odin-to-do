import "./style.css";
import {listenForClicks} from "./eventHandlers.js"
import { myTasksJSON , myProjectsJSON , setTasksJSON , setProjectsJSON } from "./localStorageHandling.js";
import { reloadAllTasks, reloadAllProjects } from "./domManipulation";
import { taskList } from "./task";
import { projectList } from "./project";

taskList.push(JSON.parse(localStorage.getItem("myProjects")));
console.log(localStorage.getItem("myProjects"));
projectList.push(JSON.parse(localStorage.getItem("myTasks")));
console.log(localStorage.getItem("myTasks"));

reloadAllProjects();
reloadAllTasks();

listenForClicks();