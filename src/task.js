
export default function addTask() {
    const newTask = document.querySelector(".add-task");
    newTask.addEventListener("click", () => {
        console.log("New Task Clicked");
    })
};
