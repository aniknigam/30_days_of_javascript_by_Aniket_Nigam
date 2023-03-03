/*
JavaScript Functions

JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.

There are mainly two advantages of JavaScript functions.

Code reusability: We can call a function several times so it save coding and also save the time.
Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.

The syntax of declaring function.

function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  

Note: It is not always compulsory to write the argument for the function.
 If the argument is needed in the code then only we will write the argument.
*/

//these are the function without arguments
function abc(){
    document.write("hello world!");//code to be executed
}

abc();//calling the function

function box(){
    alert("We are learning functions");//We have created an alert box that will only trigger when we click on the button.
}


//these are the functions with the arguments
//we will create the function that will tell the cube for the number

function findcube(number){
   alert(number*number*number);
}


//function with return value


function calc(a, b){
    return a + b;
}
var a = calc(10, 50);

document.write(a)