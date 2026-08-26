function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");

    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        span.classList.toggle("completed");
    };

    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = " [" + priority + "]";
    prioritySpan.className = "priority";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
        updateTaskCount();
    };

    li.appendChild(span);
    li.appendChild(prioritySpan);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
    updateTaskCount();

    taskInput.value = "";
    priorityInput.value = "Medium";
}

function updateTaskCount() {
    const count = document.getElementById("taskList").children.length;
    document.getElementById("taskCount").textContent =
        "Total Tasks: " + count;
}