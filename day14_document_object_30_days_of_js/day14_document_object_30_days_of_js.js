/*
Document Object Model 
The document object represents the whole html document.

When html document is loaded in the browser, it becomes a document object. 
It is the root element that represents the html document.
 It has properties and methods. By the help of document object, we can add dynamic content to our web page.

Methods of document object
We can access and change the contents of document by its methods.

The important methods of document object are as follows:

Method	Description
write("string")	writes the given string on the doucment.
writeln("string")	writes the given string on the doucment with newline character at the end.
getElementById()	returns the element having the given id value.
getElementsByName()	returns all the elements having the given name value.
getElementsByTagName()	returns all the elements having the given tag name.
getElementsByClassName()	returns all the elements having the given class name.

Accessing field value by document object
In this example, we are going to get the value of input text by user. Here, we are using document.form1.name.value to get the value of name field.

Here, document is the root element that represents the html document.

form1 is the name of the form.

name is the attribute name of the input text.

value is the property, that returns the value of the input text.

Let's see the simple example of document object that prints name with welcome message.

*/

abc = () => {
    var a = document.fcourse.course.value;
    alert(" Your course is " + a);
}

