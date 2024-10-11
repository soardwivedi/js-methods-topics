// Description
// The padEnd() method pads a string at the end.
// The padEnd() method pads a string with another string (multiple times) until it reaches a given length.

// Note
// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.

const text1 = 'a';
const text2 = text1.padEnd(4, 'h');

let text = '5';
let padded = text.padEnd(2, 'x');

console.log(text1, padded, text2);
