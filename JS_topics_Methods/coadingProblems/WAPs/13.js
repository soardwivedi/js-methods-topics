// WAP to calculate sum of even number bw 1 to 10 with tracing.

function sumOfNumbers(init, max){
    let sum = 0;
    for(let i = init; i<= max; i++){
        if(i%2 == 0){
        sum +=i;
        }
    }
     return sum; 
}
  console.log(sumOfNumbers(1, 10));