
// function button add
function clickButton(){
    // Get Value
    const inputTask = document.querySelector("#todo-input");
    const containerTodoList = document.querySelector(".container-todo-list");
    const li = document.createElement("li");
    const deleteButton = document.createElement("bouton");
    const taskValue = inputTask.value.trim();

    // check value quickly
    if (taskValue === "") return;

    // Create new task
    li.textContent = taskValue;
    li.classList.add("todo-list");
    containerTodoList.appendChild(li);
    
    // add button delete
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn")
    li.appendChild(deleteButton);
    deleteButton.onclick = function () {
        containerTodoList.removeChild(li);
    }

    // init value
    inputTask.value = "";

    // console value 
    console.log("click");
    console.log(taskValue);
}

