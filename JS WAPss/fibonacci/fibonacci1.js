const { text } = require('express');

const num = 3;

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let temp;
  console.log(num1);
  console.log(num2);
  for (let i = 0; i < num; i++) {
    temp = num1 + num2;
    console.log(temp);
    num1 = num2;
    num2 = temp;
  }
  return num1 + num2;
}
console.log(fibonacci(num));
