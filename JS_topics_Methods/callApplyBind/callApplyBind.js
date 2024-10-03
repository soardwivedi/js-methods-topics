let name = {
  firstName: 'Akshay',
  lastName: 'Saini'
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state
  );
};
// Call Method

printFullName.call(name, 'Deharadun', 'Uttarakhand');

let name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
};

// function borrowing.=> we can borrow functions from
// other object and use it with the data of other object.
printFullName.call(name2, 'Mumbai', 'Maharastra');

// Apply Method
printFullName.apply(name2, ['MumbaiMumbai', 'Maharastra']);

// Bind Method
let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharastra');
console.log(printMyName);
printMyName();
