// function apple(x) {
//   console.log('I am an apple');
//   if (x <= 101) {
//     console.log(x);

//     apple(x + 1);
//   }
// }
// apple(0);

function factorial(item) {
  if (item == 0) return 1;
  return item * factorial(item - 1);
}

let data = 5;

console.log(factorial(data));

//   5 *
//     factorial(5 - 1) *
//     factorial *
//     (5 - 2) *
//     factorial(5 - 3) *
//     factorial *
//     (5 - 4) *
//     factorial;
