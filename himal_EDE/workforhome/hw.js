function myfunction(){
    let input = document.getElementById("text");
    let inputValue = input.value;

    if (inputValue === "") {
        alert("Please, write anything in the information box to submit");
        return;
    }
    else {

    
    let list = document.getElementById("list")
    let newcontent = document.createElement("li")
    newcontent.textContent=inputValue;
    list.appendChild(newcontent);
    input.value = "";
}
}