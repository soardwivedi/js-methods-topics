const num = 5;

function getFactorialOfNumber(num) {
  let result = 1;
  if (num < 0) return 'No factorial for negative values';
  if (num == 0 || num == 1) return 'base value';
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(getFactorialOfNumber(num));
