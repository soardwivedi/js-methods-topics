const person = {
  name: 'John',
  role: 'administrator',
  age: '21'
};

const applyFunction = function (name, role) {
  return `I am ${name} and I am a ${role}`;
};

console.log(applyFunction.apply(person, ['Atul', 'Backend Developer']));
