function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  //   console.log('444', left, right);
  while (left < right) {
    // Swap elements
    let temp = arr[left];
    console.log('123', temp, arr[left], arr[right]);
    arr[left] = arr[right];
    arr[right] = temp;

    // Move towards the center
    left++;
    // console.log(left);
    right--;
  }

  return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]
