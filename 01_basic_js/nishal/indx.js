function myfunction(){
    let input = document.getElementById("text");
    let inputValue = input.value;

    let list = document.getElementById("list");
    let newContent = document.createElement("li");
    newContent.textContent=inputValue;
    list.appendChild(newContent); 
    
    //to show the new addded text in first
    // list.insertBefore(newContent, list.firstChild)
    input.value = "";

let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                list.removeChild(newContent);
            };

            newContent.appendChild(deleteButton);
            list.appendChild(newContent);

            input.value = "";
        }