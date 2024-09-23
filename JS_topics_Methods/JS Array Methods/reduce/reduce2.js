const array = [1, 4, 5, 8, 9, 3];

const sum = array.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);

console.log(sum);
