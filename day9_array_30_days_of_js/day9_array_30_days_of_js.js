/* Arrays in Javascript 
An array is a special variable, which can hold more than one value of same type:
Example:
const letters = ["a", "b", "c"];

Syntax : 
const array_name = [item1, item2, ...]; 

Const is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.

The difference is just that var is for normal variable declaration whose value can be changed,
 whereas a variable value declared using const keyword cannot be changed.

*/

const car = ["audi", "Jaguar","range rover"];//initializing an array
document.write(car);//printing the value of array

//the values in array is assigned with indexes that start with 0. In car[array] the index of audi is 0, jaguar is 1 and so on.

//changing the value of element in the array
document.write("<br>");//for line break
car[2] = "proshe";//changing the value of index
document.write(car);

//length of an array
//The length property of an array returns the length of an array (the number of array elements).
document.write("<br>");
const lnth = car.length;
document.write(lnth);

//accessing the particular element
document.write("<br>");
const prt = car[2];
document.write(prt);

//accessing the last element in the array 
//arrayname[arrayname.length  - 1;]
document.write("<br>");
const lst = car[car.length - 1];
document.write(lst);

//printing the values of all elements of an array through for loop
//const lnth = car.length;
document.write("<br>");
document.write("values of array through for loop");
document.write("<br>");

for(i = 0; i<lnth; i++){
    document.write(car[i] + "<br>");
}
//printing the value of each element with foreach function
document.write("following values are printed with the help of foreach function")
document.write("<br>");
car.forEach((el) => document.write(el + "<br>"))//foreach function

