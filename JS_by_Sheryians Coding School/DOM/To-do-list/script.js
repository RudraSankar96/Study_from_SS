function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 400);
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

