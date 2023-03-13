/*
JavaScript Form Validation

It is important to validate the form submitted by the user because it can have inappropriate values. 
So, validation is must to authenticate user.

JavaScript provides facility to validate the form on the client-side so data processing will be faster
 than server-side validation. Most of the web developers prefer JavaScript form validation.

Through JavaScript, we can validate name, password, email, date, mobile numbers and more fields.
 */

//example for simple form validation

function validateform(){  
    var a=document.myform.name.value;  
    var b=document.myform.password.value; 
     
    if (a==null || a==""){  
        alert("Name can't be blank");  
        return false;  
      }else if(b.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
        } 
  
}

//example for password matching in form validation

passwordmatch = () =>{

    var c = document.pform.password.value;
    var d = document.pform.repassword.value;

    if(c === d){
        alert("Successfully submited");
        return true;
    }
    else{
        alert("Password did not matched. Re-Enter your password");
        return false;
    }
}

//example for valid nmber enter or not

nvalid = () =>{
    var e = document.nform.number.value;

    if(isNaN(e)){
        
        alert("enter valid number")
        return false;
    }
    else{
        return true;
    }
}










   