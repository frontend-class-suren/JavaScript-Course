function checkLeapYear(year)
{
    if(year%400 == 0)
    {
        return true;
    }else if((year%4 == 0 ) && (year%100 !== 0))
    {
        return true;
    }else {
        return false;
    }
}
if(checkLeapYear(2000))
{
    console.log("this is a leap year!")
}else {
    console.log("this is not a leap year!")
}