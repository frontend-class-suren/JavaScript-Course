
let codeOfLogin="<form action='submit'><br><input type='text' placeholder='Email Address' style='height: 35px; width: 282px;padding-left: 10px;'required><br><br><input type='password' placeholder='Password' style='height: 35px; width: 282px;padding-left: 10px;'required> <br><a style='color: rgb(184, 84, 101); text-decoration: none;' href='#'>Forgot Password?</a><br><br><button class='btn3'>Login</button><br><br><p style='text-align: center;'>Not a member?<span style='color: rgb(217, 71, 119) ;'>Signup now</span></p></form>";
function btn1(){
    document.getElementById("demo").innerHTML = codeOfLogin;
    document.getElementById("heading").innerHTML="Login Form";
    document.getElementById("btn1").style.backgroundColor=" rgb(217, 71, 119)";
    document.getElementById("btn2").style.backgroundColor=" whitegit";
    
   
}

let codeOfSignup="<form action='#'><br><input type='text' placeholder='Name' style='height: 35px; width: 282px;padding-left: 10px;'required><br><br><input type='number' placeholder='Contact' style='height: 35px; width: 282px;padding-left: 10px;'required><br><br><input type='text' placeholder='Email Address' style='height: 35px; width: 282px;padding-left: 10px;'required><br><br><input type='password' placeholder='Password' style='height: 35px; width: 282px;padding-left: 10px;'required> <br><br><button class='btn3'>Signup</button><br><br><p style='text-align: center;'>Already have an account?<span style='color: rgb(217, 71, 119) ;'>login</span></p></form>"
function btn2(){
    document.getElementById("demo").innerHTML=codeOfSignup;
    document.getElementById("heading").innerHTML="Signup Form";
    document.getElementById("btn1").style.backgroundColor="white";
    document.getElementById("btn1").style.color="black";
    document.getElementById("btn2").style.backgroundColor=" rgb(217, 71, 119)";
   
}


