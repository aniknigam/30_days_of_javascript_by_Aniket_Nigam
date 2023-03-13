/*
JavaScript onclick event
The onclick event generally occurs when the user clicks on an element. 
It allows the programmer to execute a JavaScript's function when an element gets clicked.
 This event can be used for validating a form, warning messages and many more.

Using JavaScript, this event can be dynamically added to any element. 
It supports all HTML elements except <html>, <head>, <title>, <style>, <script>, <base>, <iframe>, <bdo>, <br>, <meta>, and <param>.
 It means we cannot apply the onclick event on the given tags.

In HTML, we can use the onclick attribute and assign a JavaScript function to it.
 We can also use the JavaScript's addEventListener() method and pass a click event to it for greater flexibility.

Syntax
Now, we see the syntax of using the onclick event in HTML and in javascript (without addEventListener() method
 or by using the addEventListener() method).
*/

//example

document.getElementById("para").onclick = function() {
    fun()
}
function fun(){
    document.getElementById("para").innerHTML = "This is 30 days of javascript course and do learn at your own pace.";
   document.getElementById("para").style.color = "red";
   document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
   document.getElementById("para").style.fontSize = "50px";
   
}
