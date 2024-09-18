// WAP to calculate sum of all digits in a number.

// function addAllDigits(x){
//     const numberToString = x.toString().split("");
//     let sum = 0;
// //    console.log(numberToString);

// for(let i = 0; i<= numberToString.length; i++){ 
//  sum = sum + numberToString[i];
// }
// console.log(sum);
// return sum;
// }
// addAllDigits(2222);
// function add(y, z) {
//     return y + z;
// }
// console.log(add(2,2)); 











// const xxx = function sumArray(array){
//   let sum = 0 

//   for (let i = 0; i < array.length; i += 1) {
//   sum += array[i]
//   }

//   console.log(sum) 
//   return sum
// }
// sumArray(array);


var number = 12341;
sum = number
        .toString()
        .split("")
        .map(Number)
        .reduce(function(a, b){
    return a+b; 
}, 0)
console.log(sum);
