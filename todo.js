var item= document.querySelector("#item");
var todobox= document.querySelector("#todolist");
var addbtn= document.querySelector("#btn1");


btn1.addEventListener("click",function(){
   
        addtask(item.value);
        item.value="";
    
})

const addtask= (item)=>{
const listitem=document.createElement("li");
listitem.innerHTML=`
        ${item}
            <img src="crossnew.png" />
          </li>`;

          listitem.addEventListener("click",
          function(){
            listitem.classList.toggle("done");
          })
          listitem.querySelector("img").addEventListener(
            "click",
          function(){
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