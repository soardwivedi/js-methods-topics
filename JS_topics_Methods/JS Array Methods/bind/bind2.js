const person = {
  firstName: 'Emily',
  lastName: 'Johnson',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

const getFullName = person.fullName.bind(person);

console.log(getFullName()); // Emily Johnson
//some comment
