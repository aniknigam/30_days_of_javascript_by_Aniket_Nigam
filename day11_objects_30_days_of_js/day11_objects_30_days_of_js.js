/*
JavaScript Objects
A javaScript object is an entity having state and behavior (properties and method).
 For example: car, pen, bike, chair, glass, keyboard, monitor etc.

JavaScript is an object-based language. Everything is an object in JavaScript.

JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

There are three ways: 

1.By object literal
2.By creating instance of Object directly (using new keyword)
3.By using an object constructor (using new keyword)

*/

/*
1) JavaScript Object by object literal

The syntax of creating object using object literal is given below:

object={property1:value1,property2:value2.....propertyN:valueN}  
As you can see, property and value is separated by : (colon).
*/

//example

var a = {
    name: "Aniket Nigam",
    id: 2108,
    college: "kmc"
};

document.write(a.name + " " + a.id + " " + a.college);
document.write("<br>");

/*
2) By creating instance of Object
The syntax of creating object directly is given below:

var objectname=new Object();  
Here, new keyword is used to create object.

Let’s see the example of creating object directl
 */
//example

var b = new Object();
b.name = "ram";
b.age = 20;
b.college = "kmc";

document.write(b.name);
document.write("<br>");

/*
3) By using an Object constructor
Here, you need to create function with arguments. 
Each argument value can be assigned in the current object by using this keyword. 

The this keyword refers to the current object.

The example of creating object by object constructor is given below.

*/

//example

function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  
  
document.write(e.id+" "+e.name+" "+e.salary); 
document.write("<br>");

//example 2

function hello(fname, sid, sage) {
    this.fname = fname;
    this.sid = sid;
    this.sage = sage;
}

h = new hello("karan", 20, 21);

document.write(h.fname + " " + h.sid + " " + h.sage);