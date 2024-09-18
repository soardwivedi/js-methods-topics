// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0.

let str = "Hello world";

let newStr = str.substring(2, 7);

let newStr2 = str.substring(2);

console.log(str);
console.log(newStr);
console.log(newStr2);