//variables selecting HTML elements
const clear = document.querySelector(".clear"); //selects the clear button
const list = document.querySelector(".list"); //selects the task list
const input = document.getElementById("input"); //selects the input bar
let task = document.getElementsByTagName("li"); //select list element

function inputLength() {
    return input.value.length; //checks the length of an input's value
}

function listLength() {
    return task.length; //checks the length of the task provided
}

function createListElement() {
    let li = document.createElement("li"); //creates <li> node

    li.appendChild(document.createTextNode(input.value));
//creates a text node out of the input value and appends it
//to the li node
    list.appendChild(li); //adds li to list (ul)
    input.value = ""; //resets text input value field


}