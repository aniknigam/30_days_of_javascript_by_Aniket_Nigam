/*
querySelector()
querySelector() returns the first element within the document that matches the specified group of selectors.

syntax:

var elm = document.querySelector('selectors');

 */


show = () =>{
    var a = document.fname.text.value;
    document.querySelector("#display").innerHTML = a;
    alert(a);
}