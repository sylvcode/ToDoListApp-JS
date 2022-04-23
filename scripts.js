
// adding new item to the list of items
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
