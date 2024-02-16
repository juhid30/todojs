var iptext= document.getElementById("inputtext");
var addbtn= document.querySelector("#addbtn");
var litem= document.querySelector("listitem");

iptext.addEventListener("keyup",function(event){
    
if(event.key=='Enter')
addItem(this.value);
this.value="";
})
let addItem=(iptext)=>{
let listitem=document.createElement("li");
listitem.innerHTML=`${iptext}`;
litem.appendChild(listitem);
}