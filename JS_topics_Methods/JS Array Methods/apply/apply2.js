const person = {
  fullName: function (city, country) {
    return (
      this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country
    );
  }
};

const person1 = {
  firstName: 'Jane',
  lastName: 'Smith'
};

console.log(person.fullName.apply(person1, ['New York', 'USA']));
// Jane Smith from New York, USA
