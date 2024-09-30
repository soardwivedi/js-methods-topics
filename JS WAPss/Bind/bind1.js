const newObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

function intro() {
  console.log(
    `My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`
  );
}

const introFun = intro.bind(newObj);

console.log(introFun());
