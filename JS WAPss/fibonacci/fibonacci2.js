const num = 5;

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let tempVariable;
  console.log(num1);
  console.log(num2);
  for (let i = 0; i < num; i++) {
    tempVariable = num1 + num2;
    console.log(tempVariable);
    num1 = num2;
    num2 = tempVariable;
  }
  return num1 + num2;
}

console.log(fibonacci(num));
