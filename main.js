const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function taskAdd(){
    const todoText = todoInput.value;
    const listItem = document.createElement("li");
    listItem.innerHTML=todoText;
    todoList.appendChild(listItem);
    todoInput.value = "";
};
