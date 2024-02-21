function updateTime() {
  var today = new Date();
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][today.getMonth()];

  var date =
    String(today.getDate()).padStart(2, "0") +
    " " +
    month +
    " " +
    today.getFullYear();
  var daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day = today.getDay();

  var time =
    String(today.getHours()).padStart(2, "0") +
    ":" +
    String(today.getMinutes()).padStart(2, "0") +
    ":" +
    String(today.getSeconds()).padStart(2, "0");
  var str1 = time,
    str2 = "12:00:00";
  str3 = "18:00:00";
  str4 = "00:00:00";

  if (str1 < str2 && str1 > str4) {
    document.querySelector("h1").innerHTML = "Good Morning, Juhi!👋🏽";
  } else if (str1 > str2 && str1 < str3) {
    document.querySelector("h1").innerHTML = "Good Afternoon, Juhi!👋🏽";
  } else document.querySelector("h1").innerHTML = "Good Evening, Juhi!👋🏽";
  document.getElementById("todaydate").innerHTML =
    "Today,  " + daylist[day] + "  " + date + "<br>" + time;
}
updateTime();
setInterval(updateTime, 1000);

// Add modal
var modalToAdd = document.getElementById("createModal");
var createTaskBtn = document.querySelector(".addbtn");
var close_AddModalBtn =
  document.getElementsByClassName("createmodal-cancel")[0];

createTaskBtn.onclick = function () {
  modalToAdd.style.display = "block";
};
close_AddModalBtn.onclick = function () {
  modalToAdd.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalToAdd) {
    modalToAdd.style.display = "none";
  }
};

var todoArray = JSON.parse(localStorage.getItem("todos")) || [];

var saveBtn = document.getElementById("createmodal-savebtn");

saveBtn.onclick = function () {
  var inputBox = document.querySelector("#createmodal-inp-text");
  var timeInput = document.querySelector("#createmodal-time-input");
  if (inputBox.value == "" || timeInput.value == "") {
    alert("Please enter all the details of the todo");
  } else {
    modalToAdd.style.display = "none";

    console.log(timeInput.value);
    addTodo(inputBox.value, timeInput.value);
  }
};

(function () {
  addTodosInHTML();
})();

//['walking','joggin','test']
function addTodo(todo, todotime) {
  var inputBox = document.querySelector("#createmodal-inp-text");
  var timeInput = document.querySelector("#createmodal-time-input");

  todoArray.push({
    todos: todo,
    todotime: todotime,
  });

  updateTodosInLocalStorage();
  addTodosInHTML();

  inputBox.value = "";
  timeInput.value = "";

  console.log(todoArray);
}

function updateTodosInLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoArray));
  console.log(localStorage);
}
function addTodosInHTML() {
  var todoDiv = "";
  console.log(todoArray);
  for (var i = 0; i < todoArray.length; i++) {
    todoDiv += `<div class="list" id="${i}">
  <div class="list-content">
  <input type="checkbox" class="check" />
  <p class="list-text">
  ${todoArray[i].todos}
  
  </p>
</div>
<div class="deadline-time">${todoArray[i].todotime}</div>
<div class="edit-controllers">

  <button class="edit" onclick="editTodo(${i})">
    <img src="icons/edit.png" />
  </button>
  <button class="bin" onclick="deleteTodo(${i})" >
    <img src="icons/bin.png" />
  </button>
</div>
</div>`;
  }

  document.querySelector(".list-wrapper").innerHTML = todoDiv;

  //add todo to HTML using DOM
}
var modalToEdit = document.getElementById("editModal");
var close_EditModalBtn = document.getElementsByClassName("editmodal-cancel")[0];

function editTodo(i) {
  modalToEdit.style.display = "block";
  console.log(todoArray[i]);
  var editModal_InputText = document.querySelector("#editmodal-inp-text");
  editModal_InputText.value = todoArray[i].todos;

  var editModal_Time = document.querySelector("#editmodal-time-input");
  editModal_Time.value = todoArray[i].todotime;
  editModal_InputText.focus();
  editModal_InputText.ariaSelected();

  var saveBtn_EditModal = document.getElementById("editmodal-savebtn");
  saveBtn_EditModal.addEventListener("click", displayEditedTodo(i));
}
close_EditModalBtn.onclick = function () {
  modalToEdit.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalToEdit) {
    modalToEdit.style.display = "none";
  }
};
/* var saveBtn_EditModal = document.getElementById("editmodal-savebtn");
saveBtn_EditModal.onclick = function () {
  modalToEdit.style.display = "none";
  console.log("abcd");
  var editInputBox = document.querySelector("#editmodal-inp-text");
  
  displayEditedTodo(editInputBox.value, todoArray.indexOf(editInputBox.value));
}; */
function displayEditedTodo(i) {
  modalToEdit.style.display = "none";
  console.log("abcd");
  var editedInputBox = document.querySelector("#editmodal-inp-text");

  todoArray.splice(i, 1);

  todoArray[i].todos = editedInputBox.value;

  updateTodosInLocalStorage();
  addTodosInHTML();

  editedInputBox.value = "";

  console.log(todoArray);
}

function deleteTodo(i) {
  console.log("delete button clicked");

  todoArray.splice(i, 1);
  console.log(todoArray);
  updateTodosInLocalStorage();
  var elementToRemove = document.getElementById(i);
  elementToRemove.remove();
}
/* function check() {
  var deadlineTime = document.querySelector(".deadline-time");
  if (document.getElementsByClassName("check").checked == true) {
    deadlineTime.style.cssText += "color:red;background-color:yellow";
  }
}
check();
 */
