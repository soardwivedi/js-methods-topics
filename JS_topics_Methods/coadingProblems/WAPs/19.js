//WAP to print odd digits in a number.



function printOnlyOddDigits(x){
    const numberToString = x.toString().split("");
    const onlyOddDigt = (numberToString)=> {
        return numberToString%2 != 0;
    }
    const printOnlyOddDigits = numberToString.filter(onlyOddDigt);
    console.log(printOnlyOddDigits);
}
printOnlyOddDigits(123456789);