/*
JavaScript Object.assign() Method
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. Objects are assigned and copied by reference. It will return the target object.

Syntax:
Object.assign(target, sources)  

*/

//example

var obj1 = {
    a: 1,
    b: 2,
    c: 3
};

var obj2 = Object.assign({a:5, b:8}, obj1);

document.writeln(`${obj2.a} <br>${obj2.b}`); 

/*
JavaScript Object.defineProperties() Method
The Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object.

Syntax:
Object.defineProperties(obj, props
 */

//example

var obj1 = {};

Object.defineProperties(obj1,
    {property1:{
        value: 21}
    });
document.write("<br>");
document.write(obj1.property1);

//example 2

var obj2 = {};
Object.defineProperties(obj2,
    {property2:{
        value: 166}
    });
document.write("<br>");
document.write(obj2.property2);

//example 3 contain multiple properties

var object4= {};
Object.defineProperties(object4,{
    property1:{
        value: "Day 11 inlcude methods in javascript "
    },
    property2:{
        value: "This is 30 days of js course"
    },
    property3:{
        value: [48,4,38,7,2]
    }

});

document.write("<br>");
document.write(object4.property1 + " <br>" + object4.property2 + " <br>" + object4.property3);

/*
JavaScript Object.defineProperty() Method
The Object.defineProperty() method defines a new property directly on an object and returns the object.
 To change the flags, we can use Object.defineProperty. We cannot change it back, 
 because define property doesn?t work on non-configurable properties.

Syntax:
Object.defineProperty(obj, prop, descriptor)  
 */


//example 
const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: 42,  
  value: 52,  
  value: 542,  
  });  
object1.property1 = 177;  

document.write("<br>");
document.write(object1.property1)

/*
JavaScript Object.entries() Method
JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs.
 The ordering of the properties is the same as that given by looping over the property values of the object manually.

Syntax:
Object.entries(obj) */

var detail = {
    name: "Javascript",
    type: "course",
    time: "30 days",
    platform: "github"
};

var a =  Object.entries(detail);
var b = Object.entries(detail)[3];//for specific values
document.write("<br>");
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");

/*
JavaScript Object.freeze() Method
The Object.freeze() method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.

Syntax:
Object.freeze(obj) 
 */

//example

const obj1 = { property1: 'freeze'};  
const obj2 = Object.freeze(obj1);  
obj2.property1 = 'new_data';  
  console.log(obj2.property1); 




