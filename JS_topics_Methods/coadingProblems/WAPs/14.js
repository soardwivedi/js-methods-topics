//WAP to print sum of odd number between 1 to 10 with tracing.

function sumOfOddNumbers(x, y){
    let sum = 0;
    for(let i = x; i<=y; i++){
        if(i%2 != 0){
            sum +=i;
        }
    }
     return sum;
}
console.log(sumOfOddNumbers(1, 10));