const myForm = document.getElementById("my-form");
const todoItems = document.getElementById("todos");
const filter = document.getElementById("filter-todo");

// Event Listeners
myForm.addEventListener("submit", addTodo);
todoItems.addEventListener("click", removeTodo);
filter.addEventListener("keyup", filterTodo);

// Functions
function addTodo(e) {
  e.preventDefault();
  var newTodo = document.getElementById("todo-text");
  var li = document.createElement("li");
  var delBtn = document.createElement("button");

  li.className = "todo-list";
  delBtn.className = "delete";
  delBtn.title = "delete";

  li.appendChild(document.createTextNode(newTodo.value));
  delBtn.appendChild(document.createTextNode("X"));

  li.appendChild(delBtn);
  todoItems.appendChild(li);
  newTodo.value = "";
}

function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      todoItems.removeChild(li);
    }
  }
}

function filterTodo(e) {
  var text = e.target.value.toLowerCase();
  var todos = todoItems.getElementsByTagName("li");
  Array.from(todos).forEach((todo) => {
    var todoName = todo.firstChild.textContent;
    if (todoName.toLocaleLowerCase().indexOf(text) != -1) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}
