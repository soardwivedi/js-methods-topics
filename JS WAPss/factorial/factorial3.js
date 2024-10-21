const num = 5;

function factorial() {
  if (num == 0 || num == 1) {
    return 1;
  }
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(num));
