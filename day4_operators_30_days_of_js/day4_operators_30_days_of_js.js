//Arithmetic Operators in js

var a = 10;
var b = 20;

//addition
var c = a+b;
document.write(c);
document.write("<br>") //for breaking the line

//substraction
var d = a-b;
document.write(d);
document.write("<br>") //for breaking the line

//multiplication
var e = a*b;
document.write(e);
document.write("<br>") //for breaking the line

//for division
var f = a/b;
document.write(f);
document.write("<br>") //for breaking the line

//for modulus (remainder)
var g = a%b;
document.write(g);
document.write("<br>") //for breaking the line

//for increment 
var h = 10;
 h++;
document.write(h);
document.write("<br>") //for breaking the line

//for decrement 
var i= 10;
 i--;
document.write(i);
document.write("<br>") //for breaking the line


//Javascript comparsion operators
//Comparison operators compare two values and return a boolean value, either true or false. 

// equal operator
document.write(2 == 2); // true
document.write("<br>") //for breaking the line
document.write(2 == '2'); // true
document.write("<br>") //for breaking the line

// not equal operator
document.write(3 != 2); // true
document.write("<br>") //for breaking the line
document.write('hello' != 'Hello'); // true
document.write("<br>") //for breaking the line

// strict equal operator
document.write(2 === 2); // true
document.write("<br>") //for breaking the line
document.write(2 === '2'); // false
document.write("<br>") //for breaking the line

// strict not equal operator
document.write(2 !== '2'); // true
document.write("<br>") //for breaking the line
document.write(2 !== 2); // false
document.write("<br>") //for breaking the line


var a = 3;

// greater than operator
console.log(a > 2); // true


var a = 3;

// greater than or equal operator
console.log(a >= 3); //true

var a = 3, b = 2;

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true

var a = 2;

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true


//JavaScriptLogical Operators
//Logical operators are used to determine the logic between variables or values.

var a = true, b = false;
var c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false


var a = true, b = false, c = 4;


// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true

var a = true, b = false;

// logical NOT
console.log(!a); // false
console.log(!b); // true

