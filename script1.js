var items = JSON.parse(localStorage.getItem("list-wrapper")) || [];
var time = document.getElementsByClassName("deadline-time");
var saveBtn = document.getElementById("savebtn");
var list = document.querySelector(".list");
var listItem = document.querySelector(".list-text");
var listWrapper = document.querySelector(".list-wrapper");
console.log(items);

function listItems() {
  var listele = "";
  for (var i = 0; i < items.length; i++) {
    listele += `<div class="list">
    <div class="list-content">
    <input type="checkbox" class="check" />
    <p class="list-text">
  ${items[i].value}
    
    </p>
  </div>
  <div class="deadline-time">${time.value}</div>
  <div class="edit-controllers">
  
    <button class="edit" onclick="editTodo(${i})">
      <img src="icons/edit.png" />
    </button>
    <button class="bin" onclick="deleteTodo(${i})" >
      <img src="icons/bin.png" />
    </button>
  </div>
  </div>`;
    /* listele += items[i].value + " ";
    listele +=
      "<span onclick='deleteItem(" +
      i +
      ")'><button class='remove'>Remove</button></span></li>"; */
  }

  document.querySelector(".list-wrapper").innerHTML = listele;
}
(function () {
  listItems();
})();

//['walking','joggin']
//to be done in future => [{"todoTask":"walking","date":"19/02/2024"},{"todoTask":"joggin","date":"19/02/2024"}]
var todoArray = JSON.parse(localStorage.getItem("todos")) || [];

//['walking','joggin','test']
function addTodo(todo) {
  todoArray.push(todo);
}

//['walking','joggin','test'] => 'joggin'
function deleteTodo(todo) {
  const todoIndex = todoArray.indexOf(todo);
  if (todoIndex > -1) {
    //todo exists in the array
    todoArray.splice(todoIndex, 1);
  }
}

function updateTodosInLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoArray));
}

function addTodosInHTML(todo) {
  //add todo to HTML using DOM
}

//whenever the page loads, get the todoArray from localStorage
//loop the todoArray and add todos in HTML

saveBtn.onclick = function () {
  modal.style.display = "none";
  addTodo();
};

function addTodo() {
  var inputBox = document.querySelector("#inp-text");
  var item = inputBox.value;
  if (item === "")
    return (document.getElementsByClassName("list-text").innerHTML =
      "You need to put in a number");
  items.push({
    value: item,
  });

  localStorage.setItem("list-wrapper", JSON.stringify(items));
  listItems();
  inputBox.value = "";
}

/* function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("list-wrapper", JSON.stringify(items));
  listItems();
} */

function deleteTodo(i) {
  console.log(i);
}

function editTodo(i) {
  console.log("Edit for " + i);
  //add code to make modal visible here.

  //add the exisiting todo ka data into the modal input here

  //save button if clicked, edit the array
}

/* addItem(inpText, time);
};
function addItem(inpText, time) {
  var newList = document.createElement("div.list");
  newList.innerHTML = `<div class="list">
  <div class="list-content">
  <input type="checkbox" class="check" />
  <p class="list-text">
${inpText.value}
  
  </p>
</div>
<div class="deadline-time">${time}</div>
<div class="edit-controllers">

  <button class="edit">
    <img src="icons/edit.png" />
  </button>
  <button class="bin">
    <img src="icons/bin.png" />
  </button>
</div>
</div>`;
  listWrapper.appendChild(newList);
  inpText.value = "";
}
*/
