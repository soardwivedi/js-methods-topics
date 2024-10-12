function factorial(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return factorial(num - 1) + factorial(num - 2);
}

console.log(factorial(5));
