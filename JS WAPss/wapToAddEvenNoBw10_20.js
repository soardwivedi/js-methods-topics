const start = 10;
const second = 22;

function addEvenNoBw(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
}

console.log(addEvenNoBw(start, second));
