// Let's practice the Javascript Array method with explanation

/* Javascript Contact() method

The JavaScript array concat() method combines two or more arrays and returns a new string. 
This method doesn't make any change in the original array.
Syntax
array.concat(arr1,arr2,....,arrn)  
*/

//example

var p1 = ["Java","Javascript", "C"];//name of some programming languages
var p2 = ["c++", "php", "flutter"];
var p3 = ["kotlin"];
var add = p1.concat(p2);//concat method
var all = p1.concat(p2,p3);//concat multiple array
document.write("<br>");
document.write(add);
document.write("<br>");
document.write(all);
document.write("<br>");


/* Javascript  copyWithin() method
The JavaScript array copyWithin() method copies the part of the given 
array with its own elements and returns the modified array. 
This method doesn't change the length of the modified array.

Syntax: 
array.copyWithin(target, start, end)
*/

//example

var a = ["japan", "swiss", "italy", "masai mara"];
var result = a.copyWithin(0,1,3);
document.write(result);



