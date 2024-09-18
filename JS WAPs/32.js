// wap to calculte square of digits of a number if 
// the digit is even.

let num = 12345;
let arrayofNum = String(num);
console.log(arrayofNum);
let splitArrayOfNum = arrayofNum.split("");
let stringToNum = Number(arrayofNum);
console.log(stringToNum);


let squareOfEven = function sq(number){
    let arrayofNum = number.toString();
    // let splitArrayOfNum = arrayofNum.split("");
    for (let i = 0; i <= arrayofNum.length; i++) {
       if(Number[i] % 2 == 0){
     return Number[i] * Number[i];
       }     
}
// return square
};

console.log(squareOfEven(num));