
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

 //3(i). Adding the delete button "X": 
 let crossOutButton = document.createElement("crossOutButton"); //does not exist already in the HTML file.
 crossOutButton.appendChild(document.createTextNode("X")) //used to provide text to an element.
 // This method contains the text values as parameter which is of string type.
 li.appendChild(crossOutButton);

 crossOutButton.addEventListener("click", deleteListItem);

 
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
