document.write("The JavaScript switch statement is used to execute one code from multiple expressions. It is just like else if statement.");

/*
Syntax of Switch case 

switch(expression){  
case value1:  
 code to be executed;  
 break;  
case value2:  
 code to be executed;  
 break;  
......  
  
default:   
 code to be executed if above values are not matched;  
}  


*/

//lets create a switch case for the person who want to buy is own sim card

var age = 17;//condition
document.write("<br>");//this code is used for line break

switch(true)//if the condition will we true it will print the statement
{
case(age < 18)://if the age is greater or equal to 18
document.write("You are not eligible for buying a sim card.");//print the statement
break;//break is used if the statement is true it will further not check other statement .

case(age >=18)://condition
document.write("You are eligible to buy a sim card");
break;

default://default is used if there are none of the cases that are true
document.write("Enter the valid age for buying a sim card");
}