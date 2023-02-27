let a = "Hello"; //Global variable

function abc(){
    let message = "30 days of Javascript";
    alert(a + " " +message);
}
abc(); //function calling

alert(a); //can access a global variable

alert(message); //error: can't access the local variable