var today = new Date();
var date =
  today.getDate() +
  "/" +
  (today.getMonth() + 1) +
  "/" +
  today.getFullYear() +
  "   ";
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = today.getDay();

var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("todaydate").innerHTML =
  "Today,  " + daylist[day] + "  " + date + "<br>" + time;

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
  modalToAdd.style.display = "none";
  var inputBox = document.querySelector("#createmodal-inp-text");
  var timeInput = document.querySelector("#createmodal-time-input");
  console.log(timeInput.value);
  addTodo(inputBox.value, timeInput.value);
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
  /*  var editInputText = document.querySelector("#editmodal-inp-text");
  editInputText.value = todoArray[i]; */
}
close_EditModalBtn.onclick = function () {
  modalToEdit.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalToEdit) {
    modalToEdit.style.display = "none";
  }
};
var saveBtn_EditModal = document.getElementById("editmodal-savebtn");

saveBtn_EditModal.onclick = function () {
  modalToEdit.style.display = "none";
  console.log("abcd");
  var editInputBox = document.querySelector("#editmodal-inp-text");
  /*   editInputBox.innerHTML = `${todoArray[i]}`; */
  displayEditedTodo(editInputBox.value, todoArray.indexOf(editInputBox.value));
};
function displayEditedTodo(editedInput, i) {
  var editedInputBox = document.querySelector("#editmodal-inp-text");

  if (i > -1) {
    //todo exists in the array
    todoArray.splice(i, 1);

    todoArray[i] = editedInputBox.value;
  }

  todoArray[i] = editedInputBox.value;

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
} /* 
function check() {
  var todoText = document.querySelector(".list-text");
  if (document.getElementsByClassName("check").checked == true) {
    todoText.classList.add("tododone");
  }
  if (document.getElementsByClassName("check").checked == false) {
    todoText.classList.remove("tododone");
  }
}
check(); */
