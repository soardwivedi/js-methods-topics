const obj = {
  name: 'Vivek',
  lname: 'Dwivedi',
  roleInfo: {
    role: 'Developer',
    company: 'XYZ Corp.'
  }
};

const {
  name,
  roleInfo: { role }
} = obj;

console.log(name, role);
