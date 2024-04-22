//how to add title in fullName
function addTitle(fullName)
{
    if(fullName.toLowerCase().substring(0,3) == "er.")
    {
        return fullName;
    }else {
        return "Er."+ fullName;
    }
}
const newName = addTitle("Er.Suren Rayamajhi");
const newNameAgain = addTitle("Suren Rayamajhi");
console.log(newName);
console.log(newNameAgain)