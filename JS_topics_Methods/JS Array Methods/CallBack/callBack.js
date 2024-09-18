function calculate(x, y, operation){
    return operation(x, y);

}

const result = calculate(3, 4, function operation(num1, num2){
    return num1 + num2;
}) 

console.log(result);