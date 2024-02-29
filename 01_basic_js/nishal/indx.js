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
}