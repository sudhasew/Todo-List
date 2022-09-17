const myForm = document.getElementById("my-form");
const todoItems = document.getElementById("todos");
const filter = document.getElementById("filter-todo");

// Event Listeners
myForm.addEventListener("submit", addTodo);
filter.addEventListener("keyup", filterTodo);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteBtn";
  span.title = "delete";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var deleteBtn = document.getElementsByClassName("deleteBtn");
var i;
for (i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = function (e) {
    alert(
      `Are you sure to delete ${e.target.parentElement.firstChild.textContent}`
    );
    var div = e.target.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var listChecked = document.querySelector("ul");
listChecked.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

// Functions
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

  var span = document.createElement("SPAN");

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
    alert("No Matches found");
  }
}
