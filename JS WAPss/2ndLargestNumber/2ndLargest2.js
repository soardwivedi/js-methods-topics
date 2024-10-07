const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 10];

function find2ndLargest(arr) {
  if (arr.length < 2)
    return 'Please Provide an array of numbers with at least 2 elements';

  let max1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }
  let max2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (arr[i] > max2 && arr[i] < max1) {
      max2 = arr[i];
    }
  }
  return max2;
}
console.log(find2ndLargest(array));
