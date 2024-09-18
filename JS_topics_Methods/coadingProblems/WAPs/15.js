// WAP to print sum of even numbers between 20 to 10.

function sumOfNumbersBw20to10(x, y){
    let sum = 0;
    for(let i = x; i>=10; i--){
        if(i%2 == 0){
            sum +=i;
        }
    }
    return sum;

}
console.log(sumOfNumbersBw20to10(20,10));