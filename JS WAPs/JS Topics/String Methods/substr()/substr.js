// The substr() method extracts a part of a string.
// The substr() method begins at a specified position, and returns a specified number of characters.
// The substr() method does not change the original string.
// To extract characters from the end of the string, use a negative start position.

let str = "Hello world";

let newStr = str.substr(1, 3);

let newStr2 = str.substr(2);

let newStr3 = str.substr(-3);
let newStr4 = str.substr(-3, 4);

console.log(str);
console.log(newStr);
console.log(newStr2);
console.log(newStr3);
console.log(newStr4);