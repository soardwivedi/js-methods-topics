// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

// Syntax
// array.join(separator)

let coading = ["js", "ruby", "java", "python", "cpp"];

let coading2 = [1, 2, 3, 4, 5, 6];

let joinArray = coading.join(" or ");
let concatArray = coading2.concat(coading);

console.log(concatArray);

console.log(joinArray);