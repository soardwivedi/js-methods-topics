// WAP to calculate the sum of all digits in a number.

let number = 112345;

let sumOfDigits = function sum(num){
    return numToString = String(number)
    .split("")
    .reduce((acc, curr)=>{
        return acc + Number(curr);
    }, 0);
    // console.log(numToString);
    // for (let i = 0; i <= numToString.length; i++){
    //     return i++
    // }
};

console.log(sumOfDigits(number));