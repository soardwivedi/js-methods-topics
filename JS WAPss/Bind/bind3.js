const person = {
  name: 'vivek',
  lname: 'dwivedi',
  role: 'developer'
};

function bindFunction(name, lname, role) {
  return `I am ${name} ${lname} and I am a ${role}`;
}

const intorObj = bindFunction.bind(null, 'Atul', 'Dubey', 'Backend Developer');
console.log(intorObj());
