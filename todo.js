/* const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
 */var item= document.querySelector("#item");
var todobox= document.querySelector("#todolist");
var addbtn= document.querySelector("#btn1");


btn1.addEventListener("click",function(){
   
        addtask(item.value);
        item.value="";
    
})

const addtask= (item)=>{
 /*  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload(); */
const listitem=document.createElement("li");
listitem.innerHTML=`
<div id="listit">

        ${item}
        </div>
        <div id="modify">
              
              <img id="editpic" src="edit.png" />
              <img class="cross" src="newcross.jpg" />
            </div>
          </li>`;
          
          listitem.addEventListener("click",
          function(){
            listitem.classList.toggle("done");
          })
          listitem.querySelector(".cross").addEventListener(
            "click",
          function(){
           /*  itemsArray.splice(i,1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload(); */
            listitem.remove();
            
        })

      /*   listitem.querySelector("#btn2").addEventListener("click", function(){
            const newtext= document.createElement("input");
            newtext.innerHTML=
        }) */
        /* listitem.addEventListener("mouseover",
        function(item){
            const newitem=`type="text" placeholder="Edit here" id="item" />`;
            const edit=document.createElement("input");
            edit.innerHTML=newitem;
            item.value=edit;
        }) */
          todobox.appendChild(listitem);
}