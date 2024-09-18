// The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

// Note
// Math.random() does not return a cryptographically secure number.
// If you need a cryptographically secure number, use this Crypto API method:



// Return a random number between 0 and 1:
let a = Math.random(1);
console.log(a);

// Return a random number between 0 and 10:
let b = Math.random() * 10;
console.log(b);

// Return a random number between 0 and 100:
let c = Math.random() * 100;
console.log(c);

// A random whole number between 1 and 10:
let d = Math.floor ((Math.random() * 10) + 1);
console.log(d);

// A random whole number between 1 and 100:
let e = Math.floor ((Math.random() * 100) + 1);
console.log(e);