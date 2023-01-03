import newTask from "./task.js";

const addTask = document.querySelector(".add-task");


const addTaskClick = () => {
    newTask();
}

addTask.addEventListener('click', addTaskClick);

export { addTaskClick, addTask };