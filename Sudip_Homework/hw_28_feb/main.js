function myfunction(){
    let input = document.getElementById("text");
    let actionInput = document.getElementById("action");
    let inputValue = input.value;
    let actionvalue = actionInput.value;

    if (inputValue === "") {
        alert("Item Field is required");
        return;
    }
    if (actionvalue === ""){
        alert("Action field is requried");
        return;
    }

    // let list = document.getElementById("list");
    //to show the item in table
    let tableBody=document.getElementById('tbody');
    //create new row
    let newRow = document.createElement("tr");

    //creating a cell for SN
    let snCell = document.createElement("td")
    snCell.textContent = tableBody.children.length + 1;//to increment the SN
    newRow.appendChild(snCell);

    //creating a cell for item
    let itemCell = document.createElement("td")
    itemCell.textContent = inputValue;
    newRow.appendChild(itemCell);

    //creating a cell for action
    let actionCell = document.createElement("td")
    actionCell.textContent = actionvalue;
    newRow.appendChild(actionCell);
    

    // Append the new row to the table body
    tableBody.appendChild(newRow);







//to show the item in list
    // let newContent = document.createElement("li");
    // newContent.textContent=inputValue;
    // list.appendChild(newContent); 
    
    //to show the new addded text in first
    // list.insertBefore(newContent, list.firstChild)
    input.value = "";
    actionInput.value = "";
}