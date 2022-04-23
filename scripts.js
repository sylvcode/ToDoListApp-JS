
//1. Adding new item to the list of items
function newItem()
let li = document.createElement("li");
let inputValue = document.getElementById("input").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);

if (inputValue === '' ) {
alert("You must write something !");
} else {
  let list = document.querySelector('#list'); //list is an id in the form in the HTML
  list.appendChild(li);
}

 //2. Crossing out an item from the list of items:

 function crossOut() {
   li.classList.toggle("strike"); //Toggling:means if there is no class name assigned to the element,
   // then a class name can be assigned to it dynamically or if a certain class is already present,
   // then it can be removed dynamically by just using the toggle()
 }

 li.addEventListener("click",crossOut);