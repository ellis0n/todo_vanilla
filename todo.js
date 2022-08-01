// Define selectors
const taskInput = document.querySelector(".task_input");
const taskDescription = document.querySelector(".task_description");
const taskPriority = document.querySelector(".priority_input");
const taskButton = document.querySelector(".task_btn");
const taskList = document.querySelector(".task_list");
const notifBox = document.querySelector(".notif_box");

// Check for input from user
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", modify);

// Add a task to the list
function addTask(e) {
  // Input validation

  if (taskInput.value === "") {
    //Notify user
    notifBox.removeChild;
    e.preventDefault();
    const note = document.createElement("p");
    note.innerHTML = "You need to input something!";
    note.classList.add("error");
    notifBox.appendChild(note);
    notifBox.style.display = "flex";
    const timeoutEnd = setTimeout(() => {
      notifBox.style.display = "none";
      clearTimeout(timeoutEnd);
      notifBox.removeChild(note);
    }, 2000);
  } else {
    if (taskInput.value.length < 3) {
      notifBox.removeChild;
      e.preventDefault();
      const note = document.createElement("p");
      note.innerHTML = "Be a bit more descriptive...";
      note.classList.add("error");
      notifBox.appendChild(note);
      notifBox.style.display = "flex";
    } else if (taskInput.value.length > 30) {
      notifBox.removeChild;
      e.preventDefault();
      const note = document.createElement("p");
      note.innerHTML = "Be a bit more brief!";
      note.classList.add("error");
      notifBox.appendChild(note);
      notifBox.style.display = "flex";
    } else {
      e.preventDefault();
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("taskDiv");
      const newTask = document.createElement("li");
      newTask.innerText = taskInput.value;
      const newTaskDescrip = document.createElement("p");
      newTaskDescrip.innerText = taskDescription.value;
      newTaskDescrip.classList.add("description");
      const newTaskPriority = document.createElement("p");
      newTaskPriority.innerText = taskPriority.value;
      newTaskPriority.classList.add(`${taskPriority.value}_priority`);
      taskDiv.appendChild(newTask);
      taskDiv.appendChild(newTaskDescrip);
      taskDiv.appendChild(newTaskPriority);

      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check fa-3x"></i>';
      completeBtn.classList.add("complete_btn");
      taskDiv.appendChild(completeBtn);

      const pendingBtn = document.createElement("button");
      pendingBtn.innerHTML = '<i class="fa-solid fa-spinner fa-3x"></i>';
      pendingBtn.classList.add("pending_btn");
      taskDiv.appendChild(pendingBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fas fa-trash fa-3x"></i>';
      deleteBtn.classList.add("delete_btn");
      taskDiv.appendChild(deleteBtn);

      // Notify user
      notifBox.removeChild;
      const note = document.createElement("p");
      note.innerText = "Task saved.";
      note.classList.add("saved");
      notifBox.appendChild(note);
      notifBox.style.display = "flex";
      const timeoutEnd = setTimeout(() => {
        notifBox.style.display = "none";
        clearTimeout(timeoutEnd);
        notifBox.removeChild(note);
      }, 2000);

      taskList.appendChild(taskDiv);
      taskInput.value = "";
      taskDescription.value = "";
    }
  }
}

// Give buttons functionality
function modify(e) {
  const click = e.target;
  if (click.classList[0] === "complete_btn") {
    const todo = click.parentElement;
    click.parentElement.remove;
    todo.classList.toggle("completedTask");
  }
  if (click.classList[0] === "pending_btn") {
    const todo = click.parentElement;
    todo.classList.toggle("pendingTask");
  }
  if (click.classList[0] === "delete_btn") {
    const todo = click.parentElement;
    todo.remove();
  }
}
