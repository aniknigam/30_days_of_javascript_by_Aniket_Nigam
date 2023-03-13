/*
JavaScript dblclick event
The dblclick event generates an event on double click the element.
 The event fires when an element is clicked twice in a very short span of time.
  We can also use the JavaScript's addEventListener() method to fire the double click event.

In HTML, we can use the ondblclick attribute to create a double click event.

Syntax
Now, we see the syntax of creating double click event in HTML and in javascript
 (without using addEventListener() method or by using the addEventListener() method).

 */

 document.getElementById("para").onclick = function() {
    fun()
}
function fun(){
    document.getElementById("para").innerHTML = "This is 30 days of javascript course and do learn at your own pace.";
   document.getElementById("para").style.color = "red";
   document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
   document.getElementById("para").style.fontSize = "50px";
   
}

//using double click event in javascript
document.getElementById("para").ondblclick = function() {
    fun1()
}
function fun1() {
    document.getElementById("para").innerHTML = "Click me";
    document.getElementById("para").style.color = "black";
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("para").style.fontSize = "16px";
    
}