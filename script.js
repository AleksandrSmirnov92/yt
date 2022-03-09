"use strict";
const add_input = document.querySelector(".add_task_input");
const add_button = document.querySelector(".button_add");
const add_result = document.querySelector(".add_task_result");


let tasks;
if (!localStorage.tasks){
   tasks = [];
}
else {
   tasks = JSON.parse(localStorage.getItem('tasks'));
}

function Task (description) {
   this.description = description;
   this.completed = false;
}

const updateLocal = () => {
   localStorage.setItem("tasks",JSON.stringify(tasks));
}

add_button.addEventListener("click", () => {
    tasks.push(new Task(add_input.value));
    updateLocal();
});
localStorage.clear()
