
let codeOfLogin="<form name='myform' action='submit' onsubmit='validateform()'><br><input type='text' placeholder='Email Address' style='height: 35px; width: 282px;padding-left: 10px;'required><br><br><input type='password' placeholder='Password' style='height: 35px; width: 282px;padding-left: 10px;'required> <br><a style='color: rgb(184, 84, 101); text-decoration: none;' href='#'>Forgot Password?</a><br><br><button class='btn3'>Login</button><br><br><p style='text-align: center;'>Not a member?<span style='color: rgb(217, 71, 119) ;'>Signup now</span></p></form>";
function btn1(){
    document.getElementById("demo").innerHTML = codeOfLogin;
    document.getElementById("heading").innerHTML="Login Form";
    document.getElementById("btn1").style.backgroundColor=" rgb(217, 71, 119)";
    // document.getElementById("btn2").style.backgroundColor=" white";
    
   
}

let codeOfSignup="<form name='myForm' action='#' onsubmit='return validateForm()'><br><input type='text' placeholder='Name' name='name' style='height: 35px; width: 282px;padding-left: 10px;' ><br><br><input type='number' name='number' placeholder='Contact' style='height: 35px; width: 282px;padding-left: 10px;'><br><br><input type='text' placeholder='Email Address' name='email' style='height: 35px; width: 282px;padding-left: 10px;'><br><br><input type='password' name='password' placeholder='Password' style='height: 35px; width: 282px;padding-left: 10px;'><br><br><input type='password' name='confirmpassword' placeholder='Confirm Password' style='height: 35px; width: 282px;padding-left: 10px;'> <br><br><button class='btn3'>Signup</button><br><br><p style='text-align: center;'>Already have an account?<span style='color: rgb(217, 71, 119) ;'>login</span></p></form>"
function btn2(){
    document.getElementById("demo").innerHTML=codeOfSignup;
    document.getElementById("heading").innerHTML="Signup Form";
    document.getElementById("btn1").style.backgroundColor="white";
    document.getElementById("btn1").style.color="black";
    document.getElementById("btn2").style.backgroundColor=" rgb(217, 71, 119)";
   
}
function validateForm(){
    let name = document.forms.myForm.name.value;
    let contact = document.forms.myForm.number.value;
    if (name==""){
        alert("Name must be filled out");
        return false;
    }
    else if(!isNaN(name)){
        alert("Enter a valid name");
        return false;
    }
    else if(contact==""){
        alert("Contact must be filled out");
        return false;
    }
    else if(isNaN(contact)){
        alert("contact should be number");
        return false;
    }
    else if(contact.length<10 || contact.length>10){
        alert("Enter 10 digits number");
        return false;
    }
    {

    var email = document.forms.myForm.email.value;

    if (email == "") {
        alert("Email is required");
        return false;
    } else {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            alert("You have entered an invalid email address!");
            return false;
        }
    }
{
    let password = document.forms.myForm.password.value;
    let confirmpassword = document.forms.myForm.confirmpassword.value;
    if(password == ""){
        alert("Password is required");
        return false;
   }
   else if(confirmpassword =="" || confirmpassword !==password){
    alert("Password doesn't match");
    return false;
   }
   

}
    }
}

function mouseover(obj){
    document.getElementById("btn1").style.backgroundColor = "rgb(217, 71, 119)";
}
function mouseout(obj){
    document.getElementById("btn1").style.backgroundColor="white";
    document.getElementById("btn1").style.color="black";
}
function mouseover1(obj){
    document.getElementById("btn2").style.backgroundColor = "rgb(217, 71, 119)";
}
function mouseout1(obj){
    document.getElementById("btn2").style.backgroundColor="white";
    document.getElementById("btn2").style.color="black";
}