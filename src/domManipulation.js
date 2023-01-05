import {newProjectList,  newTaskList} from "./index.js";


const body = document.querySelector("body");



export const createModalPopup = () => {
    const modalContainer = document.createElement("div");
    const modalOverlay = document.createElement("div");

    modalOverlay.classList.add("modal-overlay");
    modalContainer.classList.add("modal-container");

    body.appendChild(modalOverlay);
    body.appendChild(modalContainer);
}

export const createProjectForm = () => {
    const modalContainer = document.querySelector(".modal-container");
    const addProjectForm = document.createElement("div");
    const newProjectLabel = document.createElement("label");
    const newProjectName = document.createElement("input");
    const newProjectSubmit = document.createElement("button");

    newProjectLabel.setAttribute('for', 'project-name');
    newProjectLabel.innerText = "Project Name";
    newProjectName.setAttribute('input','text');
    newProjectName.setAttribute('id', 'project-name');
    newProjectSubmit.innerText = "Add Project";
    newProjectSubmit.classList.add("project-submit");

    addProjectForm.appendChild(newProjectLabel);
    addProjectForm.appendChild(newProjectName);
    addProjectForm.appendChild(newProjectSubmit);
    modalContainer.appendChild(addProjectForm);
    newProjectName.focus();
}

export const createTaskForm = () => {
    const modalContainer = document.querySelector(".modal-container");
    const addTaskForm = document.createElement("div");
    const newTaskNameLabel = document.createElement("label");
    const newTaskNameInput = document.createElement("input");
    const newTaskProjectLabel = document.createElement("label");
    const newTaskProjectInput = document.createElement("select");
    const newTaskDescriptionLabel = document.createElement("label");
    const newTaskDescriptionInput = document.createElement("input");
    const newTaskDateLabel = document.createElement("label");
    const newTaskDateInput = document.createElement("input");
    const newTaskPriorityLabel = document.createElement("label");
    const newTaskPriorityInput = document.createElement("select");
    const newTaskSubmit = document.createElement("button");

    newTaskNameLabel.setAttribute('for', 'task-name');
    newTaskNameLabel.innerText = "Task Name: ";
    newTaskNameInput.setAttribute('input','text');
    newTaskNameInput.setAttribute('id','task-name');
    newTaskProjectLabel.setAttribute('for', 'task-project');
    newTaskProjectLabel.innerText = "Project: ";
    newTaskProjectInput.setAttribute('input', 'select');
    newTaskProjectInput.setAttribute('id','task-project');
        for (let i = 0; i < newProjectList.length; i++) {
            const projectSelectionValue = newProjectList[i];
            const newProjectSelector = document.createElement("option");
            newProjectSelector.innerText = projectSelectionValue;
            newProjectSelector.value = projectSelectionValue;
            newTaskProjectInput.appendChild(newProjectSelector);
        }
    newTaskDescriptionLabel.setAttribute('for', 'task-desc');
    newTaskDescriptionLabel.innerText = "Description: ";
    newTaskDescriptionInput.setAttribute('input', 'text');
    newTaskDescriptionInput.setAttribute('id', 'task-desc')
    newTaskDateLabel.setAttribute('for', 'task-date');
    newTaskDateLabel.innerText = "Due Date: ";
    newTaskDateInput.setAttribute('type', 'date');
    newTaskDateInput.setAttribute('id', 'due-date')
    newTaskDateInput.setAttribute('name', 'due-date')
    newTaskPriorityLabel.setAttribute('for', 'task-priority');
    newTaskPriorityLabel.innerText = "Priority: ";
    newTaskPriorityInput.setAttribute('input','select');
    newTaskPriorityInput.setAttribute('id','task-priority');
    for (let i = 1; i < 5; i++) {
        const newTaskPriorityOption = document.createElement("option");
        newTaskPriorityOption.value = i;
        if (newTaskPriorityOption.value == "1") {
            newTaskPriorityOption.innerText = "1 - Low";
        } else if (newTaskPriorityOption.value == "2") {
            newTaskPriorityOption.innerText = "2 - Normal";
            newTaskPriorityOption.selected = 'selected';
        } else if (newTaskPriorityOption.value == "3") {
            newTaskPriorityOption.innerText = "3 - High";
        } else if (newTaskPriorityOption.value == "4") {
            newTaskPriorityOption.innerText = "4 - Urgent";
        }
        newTaskPriorityInput.appendChild(newTaskPriorityOption);
    }
    newTaskSubmit.innerText = "Add Task"; 
    newTaskSubmit.classList.add("task-submit"); 

    addTaskForm.appendChild(newTaskNameLabel);
    addTaskForm.appendChild(newTaskNameInput);
    addTaskForm.appendChild(newTaskDescriptionLabel);
    addTaskForm.appendChild(newTaskDescriptionInput);
    addTaskForm.appendChild(newTaskProjectLabel);
    addTaskForm.appendChild(newTaskProjectInput);
    addTaskForm.appendChild(newTaskDateLabel);
    addTaskForm.appendChild(newTaskDateInput);
    addTaskForm.appendChild(newTaskPriorityLabel);
    addTaskForm.appendChild(newTaskPriorityInput);
    addTaskForm.appendChild(newTaskSubmit);
    modalContainer.appendChild(addTaskForm);
}

export const removeModalPopup = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalContainer = document.querySelector(".modal-container");
    modalOverlay.remove();
    modalContainer.remove();
}

export const addSubmittedProject = (title) => {
    const projectList = document.querySelector(".project-list");

    const newProjectTitle = document.createElement("li");
    newProjectTitle.classList.add("project-item");
    newProjectTitle.innerText = title;

    projectList.appendChild(newProjectTitle);

    newProjectList.push(title);
    console.log(newProjectList);

    return newProjectList;
}

export const addSubmittedTask = (title, project, description, date, priority) => {
    const taskList = document.querySelector(".task-list");

    const newTaskItem = document.createElement("div");
    const newTaskTitle = document.createElement("h3");
    const newTaskDesc = document.createElement("p");
    const newTaskDueContainer = document.createElement("div");
    const newTaskDueLabel = document.createElement("label");
    const newTaskDueInput = document.createElement("input");
    const newTaskPriorityContainer = document.createElement("div");
    const newTaskPriorityLabel = document.createElement("label");
    const newTaskPrioritySelect = document.createElement("select");

    newTaskItem.classList.add("task-item");

    newTaskTitle.classList.add("task-title");
    newTaskTitle.innerText = title;

    newTaskDesc.classList.add("task-desc");
    newTaskDesc.innerText = description;

    newTaskDueContainer.classList.add("due-date-container");

    newTaskDueLabel.setAttribute('for', 'due-date');

    newTaskDueInput.setAttribute('type', 'date');
    newTaskDueInput.setAttribute('name', 'due-date');
    newTaskDueInput.setAttribute('id', 'due-date');
    newTaskDueInput.value = date;

    newTaskPriorityContainer.classList.add("priority-container");

    newTaskPriorityLabel.setAttribute('for', 'task-priority');

    newTaskPrioritySelect.setAttribute('name', 'task-priority');
    newTaskPrioritySelect.setAttribute('id', 'task-priority');

    for (let i = 1; i < 5; i++) {
        const newTaskPriorityOption = document.createElement("option");
        newTaskPriorityOption.value = i;
        if (newTaskPriorityOption.value == "1") {
            newTaskPriorityOption.innerText = "1 - Low";
        } else if (newTaskPriorityOption.value == "2") {
            newTaskPriorityOption.innerText = "2 - Normal";
        } else if (newTaskPriorityOption.value == "3") {
            newTaskPriorityOption.innerText = "3 - High";
        } else if (newTaskPriorityOption.value == "4") {
            newTaskPriorityOption.innerText = "4 - Urgent";
        }
        if (priority.value == newTaskPriorityOption.value) {
            newTaskPriorityOption.selected = 'selected';
        }
        newTaskPrioritySelect.appendChild(newTaskPriorityOption);
    }

    newTaskDueContainer.appendChild(newTaskDueLabel);
    newTaskDueContainer.appendChild(newTaskDueInput);
    newTaskPriorityContainer.appendChild(newTaskPriorityLabel);
    newTaskPriorityContainer.appendChild(newTaskPrioritySelect);
    newTaskItem.appendChild(newTaskTitle);
    newTaskItem.appendChild(newTaskDesc);
    newTaskItem.appendChild(newTaskDueContainer);
    newTaskItem.appendChild(newTaskPriorityContainer);
    taskList.appendChild(newTaskItem);
}