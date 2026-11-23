console.log("Task Tracker ready");





// Data

const tasks = [
    { text: "Revise DOM selectors", done: false },
    { text: "Push Lab Sheet 01 to GitHub", done: true },
    { text: "Read MDN: Introduction to events", done: false }
];




// Page Elements

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const message = document.getElementById("message");
const list = document.getElementById("task-list");
const summary = document.getElementById("summary");






// TODO 1 


function createTaskItem(task, index) {

    const li = document.createElement("li");

    li.dataset.index = index;

    if (task.done) {
        li.classList.add("done");
    }

    const span = document.createElement("span");

    span.textContent = task.text;

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";

    deleteButton.classList.add("delete-btn");

    deleteButton.textContent = "✕";

    li.append(span, deleteButton);

    return li;

}




// TODO 2 and TODO 3 - Render Tasks


function render() {

    list.textContent = "";

    tasks.forEach((task, index) => {

        list.append(createTaskItem(task, index));

    });


    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.done
    ).length;

    const remainingTasks = totalTasks - completedTasks;

    summary.textContent =
        `${totalTasks} tasks | ${completedTasks} done | ${remainingTasks} to go`;

}




// TODO 4 - Add New Task

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {

        message.textContent = "Please enter a task.";

        message.classList.add("error");

        return;

    }


    tasks.push({
        text: taskText,
        done: false
    });

    input.value = "";

    message.textContent = "Task added.";

    message.classList.remove("error");

    render();

});





// TODO 5 - Event Delegation

list.addEventListener("click", (e) => {

    const item = e.target.closest("li");

    if (!item) return;

    const index = Number(item.dataset.index);


    if (e.target.closest(".delete-btn")) {

        tasks.splice(index, 1);

        message.textContent = "Task deleted.";

    } else {

        tasks[index].done = !tasks[index].done;

    }

    render();

});





// Initial Render

render();
