/*
The document.getElementsByTagName() method returns all the element of specified tag name.

The syntax of the getElementsByTagName() method is given below:

document.getElementsByTagName("name") 
*/

var a = document.getElementsByTagName("p");
var b = a.length;
document.write("length of p is" + b);