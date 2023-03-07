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
var c = a.fill("bootstrap",1);//it tells the position
document.write(a);
document.write("<br>");


