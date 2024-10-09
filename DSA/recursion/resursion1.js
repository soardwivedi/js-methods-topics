function factorial(value_n, value_r) {
  if (!value_r) {
    value_r = 1;
  }
  if (value_n == 0 || value_n == 1) return 1;
  let factorial_n = 1;
  let factorial_r = 1;
  let factorial_n_r = 1;
  for (let i = 1; i <= value_n; i++) {
    factorial_n = i * factorial_n;
  }
  if (value_r > 1) {
    for (let i = 1; i <= value_n - value_r; i++) {
      factorial_r = i * factorial_r;
    }
  }

  for (let i = 1; i <= value_r; i++) {
    factorial_n_r = i * factorial_n_r;
  }
  //   console.log(factorial_n, factorial_r);
  console.log(factorial_n_r, factorial_n, factorial_r);
  return factorial_n / (factorial_r * factorial_n_r);
}

console.log(factorial(5));
