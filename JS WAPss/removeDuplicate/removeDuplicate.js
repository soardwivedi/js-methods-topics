function removeDuplicates(arr) {
  let uniqueElements = {}; // Object to keep track of unique elements
  let resultArray = []; // Array to store the result

  for (let i = 0; i < arr.length; i++) {
    // console.log(uniqueElements);
    if (!uniqueElements[arr[i]]) {
      uniqueElements[arr[i]] = true; // Mark element as seen
      resultArray[arr[i]] = arr[i];
      // resultArray.push(arr[i]); // Add unique element to result array
    }
  }

  return resultArray;
}

// Example usage:
let array = [1, 2, 3, 4, 2, 9, 1, 5, 6, 4];
console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5, 6]
