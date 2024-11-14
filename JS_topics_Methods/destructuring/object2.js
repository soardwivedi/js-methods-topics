const obj = {
  name: 'Vivek',
  age: 25,
  city: 'Bangalore',
  course: {
    name2: 'JavaScript',
    duration: '3 months',
    instructor: 'John Doe'
  }
};

// const name = obj.name;

const {
  name,
  age,
  city,
  course: { name2, duration, instructor }
} = obj;

console.log(name, age, city, duration, instructor);
