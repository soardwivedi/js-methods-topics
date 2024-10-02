const array = [1, 3, 6, 1, 8, 2, 9, 0, 4];
const newArray = [1];
function find2ndLargest(array) {
  if (array.length < 2) return 'Please provide valid array';

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (largest < array[i]) largest = array[i];
  }

  let seconLargest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < largest && array[i] > seconLargest) {
      seconLargest = array[i];
    }
  }
  return seconLargest;
}

console.log(find2ndLargest(array));
