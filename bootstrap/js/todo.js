    // Define the list of tasks
    let tasks = [];


    // Add a new task to the list
    function addTask(task) {
      tasks.push(task);
      displayTasks();
    }

    // Remove a task from the list
    function removeTask(index) {
      tasks.splice(index, 1);
      displayTasks();
    }

    // Display the list of tasks
    function displayTasks() {
      let taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = `${index + 1}. ${task}`;
        let button = document.createElement("button");
        button.classList.add("btn", "btn-danger", "btn-md", "float-right");
        button.innerText = "Remove";
        button.addEventListener("click", () => removeTask(index));
        li.appendChild(button);
        taskList.appendChild(li);
      });
    }

    // Get the input form and add an event listener
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let taskInput = document.getElementById("task");
      let task = taskInput.value.trim();
      if (task !== "") {
        addTask(task);
        taskInput.value = "";
      }
    });