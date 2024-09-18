//WAP to print each digit in a number in reverse order.

let number = 0;

 const reverseNumber = (x) => {
   const  ReverseTheNumber = x.toString().split("").reverse().join("");

    return ReverseTheNumber;
 }
 
console.log(reverseNumber(123456789));
