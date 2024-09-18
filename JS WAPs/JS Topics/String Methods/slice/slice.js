let str = "abcdefgh";

let sliceStart = str.slice(2);
console.log(sliceStart);
console.log(str);

let sliceEnd = str.slice(-2);
console.log(sliceEnd);
console.log(str);

let sliceBetween = str.slice(2, 5);
// just as slice method in array here index 2 (first parameter) is included and index 5 (2nd parameter) is excluded.
console.log(sliceBetween);
console.log(str);