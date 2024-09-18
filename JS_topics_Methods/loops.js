const names = ['Atul', 'Vivek'];

// names.forEach((r, y, z) => {
//   console.log('ram aam kahata hai', r);
//   console.log('index ', y);
//   console.log('zz ', z);
// });
//map / filter / find;

const namesObject = names.map(function (value, index, array) {
  return {
    name: value,
    index: index
  };
});

// console.log('namesObject ', namesObject);
// console.log('names ', names);

// names.forEach(function (index, value) {
//   console.log('ram aam kahata hai', value);
// });

const nums = [10, 11, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const lessThanFiveNums = nums.filter(function (num) {
  if (num < 5) {
    return true;
  }
});
console.log('less Than Five Nums', lessThanFiveNums);
const firstLessThanFiveNum = nums.find(function (num) {
  if (num < 5) {
    return true;
  }
});
console.log('First less Than Five Num', firstLessThanFiveNum);
