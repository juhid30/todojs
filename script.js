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
/* 
  







   */
// Add modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addbtn = document.querySelector(".addbtn");

// Get the <span> element that closes the modal
var cancel = document.getElementsByClassName("cancel")[0];

// When the user clicks on the button, open the modal
addbtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
cancel.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var inpText = document.getElementById("inp-text");
var saveBtn = document.getElementById("#savebtn");
var list = document.querySelector(".list");
var listItem = document.querySelector(".list-text");
var listWrapper = document.querySelector(".list-wrapper");

saveBtn.onclick = function () {
  saveBtn.onclick = function () {
    modal.style.display = "none";
  };
  /* var newList = document.createElement(".list");
  newList.innerHTML = `<div class="list-content">
  <input type="checkbox" class="check" />
  <p class="list-text">
${inpText}
  
  </p>
</div>
<div class="deadline-time">3434</div>
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
  inpText.value = ""; */
};

/* 









 */
//Edit Modal

var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var editbtn = document.querySelector(".edit");

// Get the <span> element that closes the modal
var cancel2 = document.getElementsByClassName("cancel2")[0];

// When the user clicks on the button, open the modal
editbtn.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
cancel2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
