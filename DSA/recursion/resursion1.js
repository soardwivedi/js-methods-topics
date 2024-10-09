const data = 5;

function factorial(data) {
  if (data == 0) return 1;
  return data * factorial(data - 1);
  //   factorial(data - 1);
}

console.log(factorial(data));
