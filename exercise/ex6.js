//Display all the in list form from nested array 
const arr = [1,3,4,[11,12,13],"Suren",5,6,7,[14,15,17],18,["Suren","Rayamajhi",69],36]

function displayElement(newArray)
{
    newArray.forEach(element => {
        if(Array.isArray(element))
        {
            //call the main function displayElement because function have properties like fun call itself inside function
            displayElement(element)
        }else{
            console.log(element)
        }
    })
}

displayElement(arr)