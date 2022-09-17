const myForm = document.getElementById("my-form");
const todoItems = document.getElementById("todos");
const filter = document.getElementById("filter-todo");

// Event Listeners
myForm.addEventListener("submit", addTodo);
todoItems.addEventListener("click", listChecked);
todoItems.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterTodo);

// Create a "delete" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteBtn";
  span.title = "delete";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var deleteBtn = document.getElementsByClassName("deleteBtn");
var i;
function removeItem(e) {
  if (e.target.classList.contains("deleteBtn")) {
    if (
      confirm(
        `Are you sure to delete "${e.target.parentElement.firstChild.textContent}" from your todo list`
      )
    ) {
      for (i = 0; i < deleteBtn.length; i++) {
        var div = e.target.parentElement;
        div.style.display = "none";
      }
    }
  }
}

// Add a "checked" symbol when clicking on a list item
function listChecked(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  false;
}

// Add New todo to the list
function addTodo(e) {
  e.preventDefault();
  var newTodo = document.getElementById("todoInput").value;

  var li = document.createElement("li");
  li.className = "todoInput";
  li.appendChild(document.createTextNode(newTodo));

  if (newTodo === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todos").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteBtn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < deleteBtn.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function filterTodo(e) {
  var text = e.target.value.toLowerCase();
  var todos = todoItems.getElementsByTagName("li");
  var flag = false;
  Array.from(todos).forEach((todo) => {
    var todoName = todo.firstChild.textContent;
    if (todoName.toLocaleLowerCase().indexOf(text) != -1) {
      flag = true;
      todo.style.display = "flex";
      todo.style.alignItems = "center";
    } else {
      todo.style.display = "none";
    }
  });
  if (!flag) {
    alert(`No Matches found on letter ${e.target.value}`);
  }
}
