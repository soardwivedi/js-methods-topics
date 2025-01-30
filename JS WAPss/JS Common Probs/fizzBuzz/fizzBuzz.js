function fizzBuzz(y) {
  for (let i = 0; i <= y; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      console.log('fizzBuzz');
    } else if (i % 3 == 0) {
      console.log('buzz');
    } else if (i % 2 == 0) {
      console.log('fizz');
    }
    // else console.log(i);
  }
}

console.log(fizzBuzz(16));

// for (let i = 1; i < 15; )
//   console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);

// console.log('Ram');

// for (let i = 1; i < 15; )
//   console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
