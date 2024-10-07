// Function to find the HCF of two numbers
function hcfTwoNumbers(a, b) {
  while (b !== 0) {
    console.log('b', b); // b = 8
    let temp = b; // temp = b = 8
    console.log('temp', temp);
    b = a % b; // b = 0
    console.log('b after modulus', b);
    a = temp; // a = temp = b before modulus = 4
    console.log('a temp value', a);
    console.log('============================================================');
  }
  console.log('a at return', a);
  return a;
}

// Function to find the HCF of an array of numbers
function hcfArray(arr) {
  if (arr.length === 0) return null;

  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // console.log('i', arr[i]);
    result = hcfTwoNumbers(result, arr[i]);
  }

  return result;
}

// Example usage
const numbers = [12, 4, 8, 20];
console.log(hcfArray(numbers)); // Output: 2
