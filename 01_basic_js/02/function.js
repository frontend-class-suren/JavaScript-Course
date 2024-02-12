function abc(a,b){
    // var a =2
    // var b = 3
    var expo = a**b
    console.log(expo)

}
// abc(3,5)

function Str1(){
    console.log("this is string function")
    var student = "b.tech"
    var batch = 2024
    let result1 = 70
    console.table("BMC college"+student+"is"+batch+"is score"+result1)
}
// Str1()
{/* <a type="button" onclick="Str1()">Details</a> */}

function studentRecord(Name,Address,phone,email)
{
    console.table(Name+ Address + phone + email)  
}
studentRecord("sudip","butwal",98000000,"sudip@gmail.com")