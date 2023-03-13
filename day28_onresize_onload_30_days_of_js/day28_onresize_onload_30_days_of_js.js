/*
JavaScript onresize event
The onresize event in JavaScript generally occurs when the window has been resized. 
To get the size of the window, we can use the JavaScript's window.outerWidth and window.outerHeight events.
 We can also use the JavaScript's properties such as innerWidth, innerHeight, clientWidth, ClientHeight,
  offsetWidth, offsetHeight to get the size of an element.

In HTML, we can use the onresize attribute and assign a JavaScript function to it.
 We can also use the JavaScript's addEventListener() method and pass a resize event to it for greater flexibility.

Syntax
Now, we see the syntax of using the onresize event in HTML and
 in javascript (without addEventListener() method or by using the addEventListener() method).
*/

//example 
document.getElementsByTagName("BODY")[0].onresize = function() {fun()};  
var i = 0;  
  
function fun() {  
var res = "Width = " + window.outerWidth + "<br>" + "Height = " + window.outerHeight;  
document.getElementById("para").innerHTML = res;  
  
var res1 = i += 1;  
document.getElementById("s1").innerHTML = res1;  
}  

/*
JavaScript onload
In JavaScript, this event can apply to launch a particular function when the page is fully displayed.
 It can also be used to verify the type and version of the visitor's browser. 
 We can check what cookies a page uses by using the onload attribute.

In HTML, the onload attribute fires when an object has been loaded.
 The purpose of this attribute is to execute a script when the associated element loads.

In HTML, the onload attribute is generally used with the <body> element to execute a script
 once the content (including CSS files, images, scripts, etc.) of the webpage is completely loaded.
  It is not necessary to use it only with <body> tag, as it can be used with other HTML elements.

The difference between the document.onload and window.onload is: document.onload triggers before 
the loading of images and other external content. It is fired before the window.onload. While the
 window.onload triggers when the entire page loads, including CSS files, script files, images, etc. 
 */

 //example

 window.onload = function(){  
    document.getElementById("bg").style.backgroundColor = "red";  
    document.getElementById("bg").style.width = "300px";  
    document.getElementById("bg").style.height = "300px";  
    }  