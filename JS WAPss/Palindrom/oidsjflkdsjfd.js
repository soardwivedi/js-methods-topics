// Find Pair of number whose sum is zero in a array without using in built function
// const arr = [-9,-8,-5,0,5,10,15]
// Const output = [-5,5]

// Solve by using 2 for loop

const arr = [-9, -8, -5, 0, 5, 10, 15, -10];
function numOfPairs(array) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== 0) {
      for (let j = i + 1; j <= array.length; j++) {
        // console.log(array[i] + array[j])
        if (array[i] + array[j] == 0) {
          newArray.push(array[i], array[j]);
        }
      }
    }
  }
  return newArray;
}

console.log(numOfPairs(arr));
