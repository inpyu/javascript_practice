const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function deleteToDo(event){
    const li = event.target.parentElement; // parentElement는 button의 위 태그, li에 해
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo ;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);  
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // toDoInput.Value 변수 초기화
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit)

