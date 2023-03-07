// If statement
// It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.

/*
syntax of if statement
if(expression){  
//content to be evaluated  
}  
*/

var a = 20;
if(a>10)
{
    document.write("the value of a is greater than 10");
}

// If else statement
//It evaluates the content whether condition is true of false. The syntax of JavaScript if-else statement is given below.

/*
Syntax

if(expression){  
//content to be evaluated if condition is true  
}  
else{  
//content to be evaluated if condition is false  
}  

*/

var a = 20;
if(a%2 ==0)
{

    document.write("<br>");
    document.write("a is even number");
    document.write("<br>");
}
else
{
    document.write("a is odd number");
}

// If else if statement
//It evaluates the content only if expression is true from several expressions. The signature of JavaScript if else if statement is given below.

/*
Syntax

if(expression1){  
//content to be evaluated if expression1 is true  
}  
else if(expression2){  
//content to be evaluated if expression2 is true  
}  
else if(expression3){  
//content to be evaluated if expression3 is true  
}  
else{  
//content to be evaluated if no expression is true  
}  
*/

var a = 100;
if(a==10)
{
    document.write("a is equal to 10");
}
else if(a == 50)
{
document.write("a is equal to 50");

}
else if(a== 90)
{
    document.write("a is equal to 90");
}
else if(a == 100)
{
    document.write("a is equal to 100");
}
else
{
    document.write("a does not match any number");
}