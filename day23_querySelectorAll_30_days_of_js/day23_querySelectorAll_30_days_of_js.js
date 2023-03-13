/*
querySelectorAll()
querySelectorAll() returns an array of objects with the elements that match the specified group of selectors.
Syntax:
var elms = document.querySelectorAll('selectors');

- 'selectors' is a string containing one or more CSS selectors separated by commas.
- elms is an array with the selected HTML elements.
*/

//example
 var a = document.querySelectorAll(".ab");
 for(let i=0; i < a.length; i++){
    a[i].style.backgroundColor = "red";
    a[i].style.color = "White";
 }