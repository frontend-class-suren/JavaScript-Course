//return the sum of number in array if there is string the skip or return string separately 
const arr = ["suren",2,3,33,"amit",10.5,"nishal","prays",36,"himal",18,"sudip"]
var sum = 0;
for(var i = 0; i < arr.length; i++)
{
    // console.log(arr[i]) -->if you want to check all array value return or not 
    // console.log(typeof(arr[i])) --->here once conform the typeof datatype for the value which you return 
    if(typeof(arr[i]) == "number")
    {
        // console.log(arr[i]) ===> filter all the number here just use console.log for confirmation
        // sum = sum + arr[i];
        sum += arr[i];
    }else{
        console.log(arr[i])
        //here you get only string value which is filtered by if condition
    }
    
}

// Here solved by using forEach loop
arr.forEach(element =>{
    if(typeof(element) == "number")
    {
        sum += element;
    }else{
        console.log(element)
    }
})
const total = "Here is sum of all number in array:"+sum;
console.log(total)