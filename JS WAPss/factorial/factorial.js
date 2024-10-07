const num = 5;
function getFactorialOfNumber(num) {
  let result = 1;
  if (num < 0) return false;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(getFactorialOfNumber(num));
