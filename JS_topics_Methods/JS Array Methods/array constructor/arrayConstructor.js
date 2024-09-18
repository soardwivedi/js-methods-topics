var newArray = new Array ();
newArray[0] = "Vivek";
newArray[1] = "Atul";
newArray[42] = "Rakesh";

console.log(newArray);


var newArray1 = new Array("vlue1", "value2", "value3");

// above and below line of code are exactly same.

var newArray2 = ["vlue1", "value2", "value3"];


// we should avoid using array constructor method to create a new array.
// Because If we put a single numeric value as following This will create
// an empty array with  length of that single integer value 
// (in following case array length will be 5;). 
// so this is not a good idea to use Array Constructor
// if we have only single numeric value.
var newArray3 = new Array(5);

console.log(newArray3); // output = ,,,,
console.log(newArray3.length); //output = 5
console.log(newArray3[o]); //output = undefined