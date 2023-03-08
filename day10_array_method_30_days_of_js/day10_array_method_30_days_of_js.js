// Let's practice the Javascript Array method with explanation

/* Javascript Contact() method

The JavaScript array concat() method combines two or more arrays and returns a new string. 
This method doesn't make any change in the original array.
Syntax
array.concat(arr1,arr2,....,arrn)  

*/

//example

var p1 = ["Java","Javascript", "C"];//name of some programming languages
var p2 = ["c++", "php", "flutter"];
var p3 = ["kotlin"];
var add = p1.concat(p2);//concat method
var all = p1.concat(p2,p3);//concat multiple array
document.write("<br>");
document.write(add);
document.write("<br>");
document.write(all);
document.write("<br>");


/* Javascript  copyWithin() method
The JavaScript array copyWithin() method copies the part of the given 
array with its own elements and returns the modified array. 
This method doesn't change the length of the modified array.

Syntax: 
array.copyWithin(target, start, end)
*/

//example

var a = ["japan", "swiss", "italy", "masai mara"];
var result = a.copyWithin(0,1,3);
// 0 is the targer place and 1 is where we will start and 3 is where we will stop
document.write(result);
document.write("<br>");

/* 
JavaScript Array entries() Method
The entries() method hold the key/value pairs for every value in the array.
 A key represents the index number carrying an item as its value. 
 It does not affect the original array.

 Syntax:
 array.entries()  
*/


	var itr=a.entries();
	// document.write("After applying the entries method:"+"<br>");

	for(var e of itr) //for loop using var.
	{
		document.write(e + "</br>");
	}
    //function for one more example of entries
    show = () => {
        var pcn = ["HP", "ASUS","DELL", "APPLE"];
        var ent = pcn.entries();
        for(x of ent){
           document.getElementById("systemname").innerHTML += x + "<br>"
        }
    }
   clean = () =>{
    document.getElementById("systemname").innerHTML = " ";
   }


   /*
JavaScript Array every() method
The JavaScript array every() method checks whether all the given elements in an
array are satisfying the provided condition.
It returns true when each given array element satisfying the condition otherwise false.

Syntax:
array.every(callback(currentvalue,index,arr),thisArg)  
callback - It represents the function that test the condition.

currentvalue - The current element of array.

index - It is optional. The index of current element.

arr - It is optional. The array on which every() operated.

thisArg - It is optional. The value to use as this while executing callback.
   
   */

  var z = [20,25,30,35,40];
  test = () => {
    return z > 21;
  }
var y = z.every(test);
document.write("<br>");
document.write(y + " this is the output for every function");

/*
JavaScript Array flat() Method
The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array.
 It concatenates all the elements of the given multidimensional array, 
 and flats upto the specified depth. We can specify the depth limit to 
 where we need to flatten the array. By default, the depth limit is 1.

 var newArr=arr.flat(<depth>);  

*/

var ma = ["a", "b", [1, 2], "d", "e", ["ram", "shyam"]]; //multi-dimensional array
var f = ma.flat();
document.write("<br>");
document.write(f);
document.write("<br>");


/* 
JavaScript Array fill() method

The JavaScript array fill() method fills the elements of the given array with the specified static values. 
This method modifies the original array. It returns undefined, if no element satisfies the condition.

Syntax
The fill() method is represented by the following syntax:

arr.fill(value[, start[, end]])

*/
var a = ["react", "angular", "vue"];
var b = a.fill("bootstrap");//it will fill all the values in the array to the bootstrap.
document.write(b);
document.write("<br>");

/*
JavaScript Array flatMap() Method
The flatMap() method is a combination of flat() and map() methods.
 This method initially maps each array element through a mapping function, 
 then flatten up the array with depth value as 1.
 
 Syntax:
 var newArr=arr.flatMap(function callback(currentValue[ , index[ , array]])  
{  
return element  
} [ , thisArg])  
 
 */

//example

var arr = [2,4,6,8];
var fa = arr.flatMap(x => [x/2]);
document.write(fa);

//example 2
 var a1 = ["a", "b", "c", "d"];
 var a2 = [1,2,3,4];
 var c = a1.flatMap((a1,index) => [a1,a2[index]]);
 document.write("<br>");
 document.write("array with index" + "<br>" + c + "<br>");

 //example 3

 var x = a2.flatMap(x => [x * 3]);
 document.write(x);

 /*
 JavaScript Array from() Method
The from() method creates a new array that holds the shallow copy from an array or iterable object.
 When applied to a string, each word gets converted to an array element in the new array.

 Syntax
 Array.from(object,map_fun,thisArg);  
 
 */

 //example

var a = Array.from("we are creating and array by a string");
document.write("The result is " + "<br>" + a + "<br>") ;

/*
JavaScript Array filter() method
The JavaScript array filter() method filter and extract the element of an array
 that satisfying the provided condition. It doesn't change the original array.

 Syntax:

array.filter(callback(currentvalue,index,arr),thisArg)  

 */

check = (value) => {
   return value> 30;
}
var a = [20, 25, 30, 40, 50, 54, 100];
var b = a.filter(check);
document.writeln(b);

/*
JavaScript Array find() method
The JavaScript array find() method returns the first element of the given array
 that satisfies the provided function condition.

Syntax

array.find(callback(value,index,arr),thisArg)  
*/

// example

var a = [ 100, 200, 300, 400 , 500];

check = (value) =>{
   return value  >  100;
}
document.write("<br>");
document.writeln(a.find(check));
document.write("<br>");

/*
JavaScript Array findIndex() method
The JavaScript array findIndex() method returns the index of first element 
of the given array that satisfies the provided function condition. It returns -1, 
if no element satisfies the condition.

Syntax
The findIndex() method is represented by the following syntax:

array.findIndex(callback(value,index,arr),thisArg)    

 */

//example

var arr=[5,22,19,25,34];  
var result=arr.findIndex(x=>x>20);  
document.writeln(result);
document.write("<br>");

/*

 JavaScript Array forEach() method
The JavaScript array forEach() method is used to 
invoke the specified function once for each array element.

Syntax
The forEach() method is represented by the following syntax:

array.forEach(callback(currentvalue,index,arr),thisArg)  
 */

// example

var sum = 10;
var arr = [2,3,4,5,6,7];

arr.forEach(test = (element) =>{
    sum += element;
    document.writeln(sum);
})

/*
JavaScript Array includes() method
The JavaScript array includes() method checks whether the given array contains the specified element.
 It returns true if an array contains the element, otherwise false.

Syntax
The includes() method is represented by the following syntax:

array.includes(element,start)  
*/

// example
var a =  ["js", "html", "css"];
var b = a.includes("html");
document.write("<br>");
document.write(b);
document.write("<br>");

/*

JavaScript Array indexOf() method
The JavaScript array indexOf() method is used to search the position of 
a particular element in a given array. This method is case-sensitive.

The index position of first element in an array is always start with zero.
 If an element is not present in an array, it returns -1.

Syntax
The indexOf() method is represented by the following syntax:

array.indexOf(element,index)  

*/

// example

var arr=["C","C++","Python","C++","Java"];  
var result= arr.indexOf("C++");  
document.writeln(result); 
document.write("<br>");

/*

JavaScript Array isArray() Method
The isArray() method is used to test whether the value passed is an array.
 If it finds the passed value is an array, it returns True. Otherwise, it returns False.

Syntax
Array.isArray(obj_value);  

*/

// example

document.write(Array.isArray(1,2,3,4)); //Testing the passed values.  
document.write("<br>");

//example 2

var arr=[10,20,40,50]; //An integer array.  
function f1() {  
      document.write("arr is forming an array i.e., <br>" +arr);    
                      }  
function f2() {  
     document.write("arr does not form any array. <br>");  
                      }  
if(Array.isArray(arr))  
f1();  
else  
 f2();
 
 /*
 JavaScript Array join() method
The JavaScript array join() method combines all the elements of an array into 
a string and return a new string. We can use any type of separators to separate given array elements.

Syntax
The join() method is represented by the following syntax:

array.join(separator) */

//example

var arr=["AngularJs","Node.js","JQuery"]  
var result=arr.join('-');
document.write("<br>");
document.write(result);  
document.write("<br>");


/*
JavaScript Array keys() Method
The keys() method creates and returns a new iterator object which holds the key for every index in the array.
 This method does not affect the original array.

Syntax
array.keys();  
*/

var arr=['Mon','Tue','Wed','Thu','Sat'];   
var itr=arr.keys();  
document.write(itr+"<br>");  
//Looping through each key.  
for (let key of itr) {  
  document.write(key+"<br>");  
}  

/*
JavaScript Array slice() method
The JavaScript array slice() method extracts the part of 
the given array and returns it. This method doesn't change the original array.

Syntax
The slice() method is represented by the following syntax:

array.slice(start,end) 
*/

//example

var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
var result=arr.slice(0,3);  
document.write("<br>");
document.writeln(result);  
