/*
Loops are used when you want to write the same piece of code again and again with different values.



JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for-in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do-while - also loops through a block of code while a specified condition is true


For example-

Instead of writing:

document.write("1");
document.write("<br>");
document.write("2");
document.write("<br>");
document.write("3");
document.write("<br>");
document.write("4");
document.write("<br>");
document.write("5");

we can write the following code for the same output :

for(i = 1; i<0; i++){
    document.write(i + "<br>")
}

 */

/*
syntax for - For Loop
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

The for statement creates a loop with 3 optional expressions:
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.


 */


for(i=0; i<=5; i++)//for loop implementation
{
    document.write(i + "<br>");//statement
}


/*
The while loop works through for a  code as long as a specified condition is true.

Syntax for while loop


while (condition)  
{  
    code to be executed  
}  
 

*/

var i = 100;

while(i<=110){
    document.write(i + "<br>");
    i++;//this will print the vale of i till the condition is true
}


/*
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax for do while loop

do {
  // code block to be executed
}
while (condition);
*/

var a = 55;

do{
    document.write("The number is: " + a + "<br>");
    a--;
}
while(a>=50)


//We will learn for in loop with objects because that is mostly used with objects.



