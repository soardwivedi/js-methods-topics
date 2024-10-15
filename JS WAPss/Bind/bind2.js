const introObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

function bindIntroObj(name, age, city) {
  console.log(`Hi my name is ${name} my age is ${age}  and city is ${city}`);
}

const introObjFunBind = bindIntroObj.bind('Vivek', '25', 'NOIDA');

console.log(introObjFunBind());
