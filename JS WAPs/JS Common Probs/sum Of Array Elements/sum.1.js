const array = [1, 2, 3, 4, 5];

function sumOfArrayEles(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sumOfArrayEles(array));
