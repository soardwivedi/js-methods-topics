const arr = [5, 1, 3, 2, 6]

//filter odd values

function isOdd(x){
    return x%2;
}

const output = arr.filter(isOdd)

console.log(output);

// accepted output is 
// [5, 1, 3]


function isEven(x){
    return x%2 ===0;
}

const outputEven = arr.filter(isEven);

console.log(outputEven);

// accepted output is 
// [2, 6]

const outputGreaterThan4 = arr.filter((x)=> x> 4);

console.log(outputGreaterThan4);

//video link :- https://www.youtube.com/watch?v=zdp0zrpKzIE&t=458s





//Find the first index of "Apple":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let indexOfFruits = fruits.indexOf("Apple");
//output => 2


//Start at index 3:

const fruitss = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let indexOfFruitss = fruits.indexOf("Apple", 3);
// output => 4





