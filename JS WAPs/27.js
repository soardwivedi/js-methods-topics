//WAP to count even digits are present in a number. -> in class

function countOddDigits(number){
    var oddDigitCount = 0; 

    const numberToString = number.toString();

    for (let i = 0; i < numberToString.length; i++){
        const digit = parseInt(numberToString[i]);

        if (digit % 2 !== 0) {
            oddDigitCount++;
        }
    }
    return oddDigitCount;
}

console.log(countOddDigits(12333333));