

function sum(x, y){
    let sum = 0;

    for (let i = x; i <= y; i++) {
       sum += i;
    }
    
    console.log("Sum of numbers between 10 and 20: " + sum);
}

console.log(sum(1, 10));