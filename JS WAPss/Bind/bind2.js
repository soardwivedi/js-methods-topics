const introObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

function bindIntroObj(name, age, city) {
  return `Hi my name is ${name} my age is ${age}  and city is ${city}`;
}

const introObjFunBind = bindIntroObj.bind(null, 'Vivek', '25', 'NOIDA');

console.log(introObjFunBind());
