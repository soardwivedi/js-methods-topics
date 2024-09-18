let a = 1
let b = 2

setTimeout(() => {
    console.log(a);
});

a = 10;

fetch('https://dummyjson.com/products').then(() => {
    console.log("fetch done");
});

console.log(b);
// console.log(a);