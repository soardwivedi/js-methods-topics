//WAP to print even digits in a number.

// let number = 5678;
// const onlyEven = () => {
// number.toString().split("")
// }
// console.log(onlyEven);
function returnOnlyEvenDigits(x){
let number = 0;
const splitedNumber = x.toString().split("");
function evenOnly(splitedNumber){
    return splitedNumber%2 == 0
}
const printEvenOnly = splitedNumber.filter(evenOnly);
console.log(printEvenOnly);
};
returnOnlyEvenDigits(1234222222);