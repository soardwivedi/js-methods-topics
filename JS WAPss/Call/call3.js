const obj = {
  name: 'Vivek',
  age: 25,
  city: 'Bangalore'
};

function callFunction(name) {
  console.log(`Hello ${this.name} from ${name}`);
}

callFunction.call(obj, 'Dwivedi');
