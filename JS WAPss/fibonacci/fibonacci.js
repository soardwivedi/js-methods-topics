// The Fibonacci series is a sequence of numbers where each number is the sum of the two numbers before it.
const num = 5;

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let temp;
  console.log(num1, num2);
  for (let i = 1; i <= num; i++) {
    temp = num1 + num2;
    console.log(temp);
    num1 = num2;
    num2 = temp;
  }
  return temp + num1;
}

console.log(fibonacci(num));
