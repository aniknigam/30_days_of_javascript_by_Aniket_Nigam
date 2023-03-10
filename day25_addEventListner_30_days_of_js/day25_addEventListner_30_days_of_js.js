/*
avaScript addEventListener()
The addEventListener() method is used to attach an event handler to a particular element.
 It does not override the existing event handlers. Events are said to be an essential part of the JavaScript.
  A web page responds according to the event that occurred. Events can be user-generated or generated by API's. 
  An event listener is a JavaScript's procedure that waits for the occurrence of an event.

The addEventListener() method is an inbuilt function of JavaScript.
 We can add multiple event handlers to a particular element without overwriting the existing event handlers.

Syntax
element.addEventListener(event, function, useCapture);  
*/

//example 1
fun = () => {
    document.getElementById("show").innerHTML = "this is 30 days of javascript course where you can learn all the essential topics in javascript";
}
document.getElementById("btn").addEventListener("click", fun);

//example 2

document.getElementById("abc").addEventListener("click", fun1 = () =>{
  alert("this is addEventListner method")
}) 