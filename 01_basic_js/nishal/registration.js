function validateForm(){
    let x = document.forms["myForm"]["id"].value;
    if (x==""){
        alert("Id must be filled out");
        return false;
    }
    else if (isNaN(x)){
        alert("Id must be a number");
        return false;
    }
    else if(x.length < 5 || x.length > 12){
        alert("Id must be length 5 to 12");
        return false;
    }


    let a=document.forms["myForm"]["password"].value;
    if(a==""){
        alert("password must be filled out");
        return false;
    }
    else if(a.length < 7 || a.length > 12){
        alert("Password must be a length 7 to 12")
    }

    let b=document.forms["myForm"]["name"].value;
    if(b==""){
        alert("Name must be filled out");
        return false;
    }
    else if(Number(b)){
        alert("Name should be alphabates only")
        return false;
    }

    let c=document.forms["myForm"]["code"].value;
    if(c==""){
        alert("code must be filled out");
        return false;
    }
    else if(isNaN(c)){
        alert("ZIP Code must a numeric only")
        return false;
    }

    let d=document.forms["myForm"]["email"].value;
    if(d==""){
        alert("Email must be filled out");
        return false;
    }
    else if(!validateEmail(email)){
        alert("Must be a valid email");
        return false;
    }
}
