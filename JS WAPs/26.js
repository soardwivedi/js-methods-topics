//WAP to count even digits are present in a number. -> in class

function countEvenDigits(number){
    var evenDigitsCount = 0;
    const numberToString = number.toString();

 for (let i = 0; i < numberToString.length; i++) {
   const digit = parseInt(numberToString[i]);
    
   if (digit % 2 === 0) {

    evenDigitsCount = evenDigitsCount + 1;
 }
 }


 return evenDigitsCount;
}

console.log(countEvenDigits(12342)); 