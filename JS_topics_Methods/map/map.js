const arr = [5, 1, 3, 2, 6];

//Double

function double(x) {
  return { dob: x * 2 };
}
const outputDouble = arr.map(double);
console.log(outputDouble);

const tri = function triple(x) {
  return x * 3;
};
const outputTripal = arr.map(tri);

console.log(outputTripal);

function binary(x) {
  return x.toString(2);
}
const outputBinary = arr.map(binary);

console.log(outputBinary);
