// Find Pair of number whose sum is zero in a array without using in built function
// const arr = [-9,-8,-5,0,5,10,15]
// Const output = [-5,5]

// Solve by using 2 for loop

// const arr = [-9, -8, -5, 0, 5, 10, 15, -10];
// function numOfPairs(array) {
//   let newArray = [];
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] !== 0) {
//       for (let j = i + 1; j <= array.length; j++) {
//         // console.log(array[i] + array[j])
//         if (array[i] + array[j] == 0) {
//           newArray.push(array[i], array[j]);
//         }
//       }
//     }
//   }
//   return newArray;
// }

// console.log(numOfPairs(arr));

// const arr = [-9, -8, -5, 0, 5, 10, 15, -10];
// let output = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === 0) {
//       output = [arr[i], arr[j]];
//       // Exit the inner loop once a pair is found
//     }
//   }
//   //   if (output.length > 0) break; // Exit the outer loop once a pair is found
// }

// console.log(output); // Output: [-5, 5]

const arr = [-9, -8, -5, 0, 5, 10, 15, -10];
const output = [];
let index = 0; // Tracks the next available index in the output array

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
      console.log(arr[i]);
      output[index] = arr[i]; // Add the first number of the pair
      output[index + 1] = arr[j]; // Add the second number of the pair
      index += 2; // Increment index by 2 to move to the next pair's slot
    }
  }
}

console.log(output); // Output: [-5, 5, 10, -10]
