//day, date and time display
var today= new Date();
var date= today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'   ';
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day=today.getDay();


var time= today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
document.getElementById("todaydate").innerHTML= 'Today,  '+daylist[day]+'  '+date+'<br>'+time;

//todo logic

const itemsArray= localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")): 
[];
console.log(itemsArray);
const btn1=document.querySelector("add");
btn1.addEventListener("click", ()=>{
    const item=document.querySelector("#item");
    createItem(item);
});

function createItem(item)
{
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayItems()
{
    
}