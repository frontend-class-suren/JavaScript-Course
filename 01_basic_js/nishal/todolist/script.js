// Function to add an item to the list
function addItem() {
    var input = document.getElementById("itemInput");
    var itemText = input.value.trim();

    if (itemText !== "") {
        var itemList = document.getElementById("itemList");
        var listItem = document.createElement("li");
        listItem.textContent = itemText;


        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeItem(this);
        };

        listItem.appendChild(removeButton);
        itemList.appendChild(listItem);

        input.value = "";
    }
}


function removeItem(button) {
    var listItem = button.parentNode;
    var itemList = listItem.parentNode;
    itemList.removeChild(listItem);
}
