let addToDoButton = document.getElementById('addToDo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.tectDecoration ="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChildid(paragraph);
    })
})