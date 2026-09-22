function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();


    // Check if input is empty
    if (taskText == "") {

        alert("Please enter a task!");

        return;
    }


    // Create list item
    let li = document.createElement("li");


    // Create checkbox
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    // Create task text
    let span = document.createElement("span");

    span.className = "task-text";

    span.innerText = taskText;


    // Mark task as completed
    checkbox.onchange = function () {

        if (checkbox.checked) {

            span.style.textDecoration = "line-through";
            span.style.color = "gray";

        } else {

            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    };


    // Create Edit button
    let editButton = document.createElement("button");

    editButton.innerText = "Edit";

    editButton.className = "edit-btn";


    // Edit task
    editButton.onclick = function () {

        let newTask = prompt(
            "Edit your task:",
            span.innerText
        );

        if (newTask != null && newTask.trim() != "") {

            span.innerText = newTask.trim();
        }
    };


    // Create Delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.className = "delete-btn";


    // Delete task
    deleteButton.onclick = function () {

        li.remove();

    };


    // Add all elements to list item
    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(editButton);

    li.appendChild(deleteButton);


    // Add task to the list
    document.getElementById("taskList").appendChild(li);


    // Clear input field
    taskInput.value = "";
}