const obj = {
  name: 'Vivek',
  age: 25,
  city: 'Bangalore'
};

const callFunction = function (name) {
  return `My name is ${name}`;
};

console.log(callFunction.call(obj, 'Atul'));
