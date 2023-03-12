/*
Javascript - document.getElementById() method
The document.getElementById() method returns the element of specified id.

In the previous page, we have used document.form1.name.value to get the value of the input value.
 Instead of this, we can use document.getElementById() method to get value of the input text
 . But we need to define id for the input field.

Let's see the simple example of document.getElementById() method that prints cube of the given number
 */

//example

getcube = () => {
    var num =  document.getElementById("cube").value;
    alert( "The cube of " + num +  " is " + num*num*num);
}