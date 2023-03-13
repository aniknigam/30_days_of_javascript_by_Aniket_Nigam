/*
Javascript - innerHTML
The innerHTML property can be used to write the dynamic html on the html document.

It is used mostly in the web pages to generate the dynamic html such as registration form, comment form, links etc.

*/

//example
function showcommentform() {  
    var data="Name:<br><input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='50'></textarea><br><input type='submit' value='comment'>";  
      
    document.getElementById('mylocation').innerHTML=data;  
     }  

/*
 The innerText property can be used to write the dynamic text on the html document. Here, text will not be interpreted as html text but a normal text.

It is used mostly in the web pages to generate the dynamic content such as writing the validation message, password strength etc.
 */

// example

validate = () => {
    if(document.up.userpassword.value.length > 5){
        msg = "Good Strenth";
        document.getElementById("strenght").style.color = "green";
    }
    else{
        msg = "poor";
        document.getElementById("strenght").style.color = "red";
    }
    document.getElementById("strenght").innerText = msg;
}