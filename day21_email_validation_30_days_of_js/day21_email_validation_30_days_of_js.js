/*
JavaScript email validation
We can validate the email by the help of JavaScript.

There are many criteria that need to be follow to validate the email id such as:

email id must contain the @ and . character
There must be at least one character before and after the @.
There must be at least two characters after . (dot).
*/

//example

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  