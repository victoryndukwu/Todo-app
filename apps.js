//DELETE BUTTONS//
const delBtns = document.querySelectorAll(".delete");
//Enables the deletion of list items
delBtns.forEach(function(delBtns) {
  //event listener for a click event on the delete button
  delBtns.addEventListener("click", function(e) {
    const item = e.target.parentElement;
    item.parentNode.removeChild(item);
  });
});

//ADD BUTTONS//
const addBtn = document.querySelector(".add");
const itemList = document.querySelector("#itemList");

//addItem function
let addItem = () => {
  //variable newItem captures whatever has been typed
  var newItem = document.querySelector(".input").value;
  //creates a list item and store in variable li
  var li = document.createElement("li");
  //gives the list item a class
  li.className = "item";
  //add the typed item to the newly created li
  li.appendChild(document.createTextNode(newItem));

  //create delete button
  var btn = document.createElement("button");
  btn.innerHTML = "delete";
  btn.className = "delete btn";

  if (newItem.length !== 0) {
    //add the delete button ot the document
    li.appendChild(btn);
    //add the list item to the document
    itemList.appendChild(li);
  } else {
    alert("you have to type something");
  }
};

//Event listener that enables the addition of List items
addBtn.addEventListener("click", addItem);
