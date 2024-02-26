
function calculatelove(){
    let name=document.forms.myform.name.value;
    let partnerName=document.myform.partnerName.value;
    let lovepercentage= Math.floor(Math.random()*101)+"%";
    let result = document.getElementById("result");

    if(name==""){
        alert("Your name is required");
    }
    else if(partnerName ==""){
        alert("Your Partner Name is required");
    }
    else{
    result.innerHTML = "The love percentage of " + name + " and " + partnerName +  " is: " + lovepercentage;
    }

    console.log(lovepercentage);

}