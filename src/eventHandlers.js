import { Task, taskList, indexOfEdit, setIndex } from "./task.js";
import { Project , projectList } from "./project.js";
import { removeModalPopup , createProjectForm, addSubmittedTask, addSubmittedProject, createModalPopup, createTaskForm, filterTasksByProject, reloadAllTasks, createEditedTaskForm, addEditedTask } from "./domManipulation.js";
import { newProjectList } from "./index.js";

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
        else if (target.classList.contains("project-submit")) {
            const projectTitle = document.querySelector("#new-project-name").value;

            let project = new Project(projectTitle);

            projectList.push(project);
            addSubmittedProject(project.title);
            removeModalPopup();
        }
        else if (target.classList.contains("task-submit")) {
            const taskTitle = document.querySelector("#new-task-name").value;
            const taskProject = document.querySelector("#new-task-project").value;
            const taskDescription = document.querySelector("#new-task-desc").value;
            const taskDueDate = document.querySelector("#new-task-date").value;
            const taskPriority = document.querySelector("#new-task-priority").value;

            let task = new Task(taskTitle, taskProject, taskDescription, taskDueDate, taskPriority);

            // if (task.title /*&& task.project */ && task.description && task.date && task.priority) {
                taskList.push(task);
                addSubmittedTask(task.title, task.project, task.description, task.date, task.priority);
                removeModalPopup();
            //}
        }
        else if (target.classList.contains("task-delete")) {
            const taskTitleForDeletion = target.parentElement.parentElement.children[0].innerText;
            function seeMatchingTitles(element) {
                if (element.title == taskTitleForDeletion) return true;
            }
            let taskListDeleteIndex = taskList.findIndex(seeMatchingTitles)
            taskList.splice(taskListDeleteIndex, 1);
            target.parentElement.parentElement.parentElement.remove();
        }
        else if (target.classList.contains("task-edit")) {
            const editableCard = target.parentElement.parentElement.parentElement;
            const editableTitle = editableCard.children[0].children[0].innerText;

            setIndex(taskList.map((e) => {return e.title}).indexOf(editableTitle));

            createEditedTaskForm(indexOfEdit);

        }
        else if (target.classList.contains("task-edit-submit")) {
            const taskTitle = document.querySelector("#new-task-name").value;
            const taskProject = document.querySelector("#new-task-project").value;
            const taskDescription = document.querySelector("#new-task-desc").value;
            const taskDueDate = document.querySelector("#new-task-date").value;
            const taskPriority = document.querySelector("#new-task-priority").value;

            let task = new Task(taskTitle, taskProject, taskDescription, taskDueDate, taskPriority);

            addEditedTask(task.title, task.project, task.description, task.date, task.priority);
            taskList[indexOfEdit] = task;
            removeModalPopup();
        }

        else if (target.classList.contains("project-item")) {
            const projectForFilter = target.innerText;
            const tasksWithProject = taskList.filter((element) => element.project == projectForFilter);
            filterTasksByProject(tasksWithProject);
        }
        else if (target.classList.contains("all-projects")) {
            reloadAllTasks();
        }
    })
    document.addEventListener("dblclick", (e) => {
        const {target} = e;
        if (target.classList.contains("task-title")) {
            const completedTaskCard = target.parentElement.parentElement;
            completedTaskCard.classList.add("completed-task");
        }
    })
    return;
};

export { listenForClicks };

// // children: HTMLCollection { 0: div.task-top-row, 1: p.task-desc
// , length: 4, … }
// ​​
// 0: <div class="task-top-row">​​
// 1: <p class="task-desc">​​
// 2: <div class="due-date-container">​​
// 3: <div class="priority-container">
// ​​
// length: 4