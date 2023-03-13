/*
GetElementsByClassName()
The getElementsByClassName() method is used for selecting or getting the elements through their class name value.This DOM method returns an array-like object that consists of all the elements having the specified classname.
On calling the getElementsByClassName() method on any particular element,
it will search the whole document and will return only those elements which match the specified or given class name.

Syntax: 
var ele=document.getELementsByClassName('name');  

   
*/

//example
hello = () =>{
 var a = document.getElementsByClassName("c1");
 a[0].innerHTML = "30 days of js by Aniket Nigam";
//  a[1].innerHTML = "30 days of js by Aniket Nigam";

}