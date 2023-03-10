/*
Browser Object Model
Browser Object Model (BOM)
The Browser Object Model (BOM) is used to interact with the browser.

The default object of browser is window means you can call all the functions of window by specifying window or directly.
 For example:

window.alert("hello javatpoint");  
is same as:

alert("hello javatpoint");  
You can use a lot of properties (other objects) defined underneath the window object like
 document, history, screen, navigator, location, innerHeight, innerWidth,
*/

//example
// window.alert("30 days of javascript");

/*
The window object represents a window in browser. An object of window is created automatically by the browser.

Window is the object of browser, it is not the object of javascript. The javascript objects are string, array, date etc.

Method           	Description
alert()	        displays the alert box containing message with ok button.
confirm()	    displays the confirm dialog box containing message with ok and cancel button.
prompt()	    displays a dialog box to get input from the user.
open()	        opens the new window.
close()	        closes the current window.
setTimeout()	performs action after specified time like calling function, evaluating expressions etc.
*/

//alert example
hello = () =>  alert("this is alert box");

//confirm example

cnf = () => {
    var a = confirm("Are you above 18");
    if(a==true){
        alert("you are eligible");
    }
    else{
        alert("you are not eligible");
    }
}

//promt example

pmt = () =>{
   var a =  prompt("What is your name?");
   alert("Your name is " + a);
}

//open example

opn = () => {
    open("https://www.google.com/");
}

//setTimeout example
sto = () =>{
    setTimeout(message, 2000)
}
message = () => {
    alert("this is setTimeout");
}
/*
Javascript History Mehod

The JavaScript history object represents an array of URLs visited by the user.
 By using this object, you can load previous, forward or any particular page.

The history object is the window property, so it can be accessed by:

No.	Method	    Description
1	forward()	loads the next page.
2	back()    	loads the previous page.
3	go()	    loads the given page number.

history.back();//for previous page  
history.forward();//for next page  
history.go(2);//for next 2nd page  
history.go(-2);//for previous 2nd page  
*/

/*
Javascript screen method
The JavaScript screen object holds information of browser screen. 
It can be used to display screen width, height, colorDepth, pixelDepth etc.

The navigator object is the window property, so it can be accessed by:

No.	Property	Description
1	width	returns the width of the screen
2	height	returns the height of the screen
3	availWidth	returns the available width
4	availHeight	returns the available height
5	colorDepth	returns the color depth
6	pixelDepth	returns the pixel depth
*/

//example

document.writeln("<br>screen.width: "+screen.width);  
document.writeln("<br>screen.height: "+screen.height);  
document.writeln("<br>screen.availWidth: "+screen.availWidth);  
document.writeln("<br>screen.availHeight: "+screen.availHeight);  
document.writeln("<br>screen.colorDepth: "+screen.colorDepth);  
document.writeln("<br>screen.pixelDepth: "+screen.pixelDepth);  

