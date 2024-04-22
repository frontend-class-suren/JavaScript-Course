//adding value of sum which is divisible by 3 and 5 in range between lower 15 to higher 200
function rangeSum(x,y)
{
    var sum = 0;
    if(y>x)
    {
        for(var i = x; i<=y; i++)
        {
            if(i%3 == 0 || i%5 == 0)
            {
               sum = sum + i;
               
            }
        }
        return sum;
    }else{
       return "Invalid input!"
    }
     
}
console.log(rangeSum(15,20))