///this how split extension of file
function getExtension(fileName)
{
    const a = fileName.split(".").pop()
    //const a = fileName.split(".")
    // return a.pop()
    //pop() method is return last value of array or string
    return a;
}
// console.log(getExtension("suren.rayamajhi.pdf"));
const d = getExtension("suren.rayamajhi.png");
//if you wanna store extension in another variable
console.log(d)