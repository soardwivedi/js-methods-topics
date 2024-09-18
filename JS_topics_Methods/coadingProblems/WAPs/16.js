//WAP to print sum of odd no b/w 35 to 11.

function sumOfOddNumbersBw35to10(x, y) {
    let sum = 0;
    for(let i= x; i>=y; i--){
        if(i%2 !=0){
            sum +=i;
        }
    }
    return sum;
}
console.log(sumOfOddNumbersBw35to10(35, 11));