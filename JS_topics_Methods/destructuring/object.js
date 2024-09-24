const obj = { value1: 'value1d', value2: 'value2' };

const { value1, value2 } = obj;

console.log(value1, value2);

const obj1 = {
  value1: 'value1d',
  value2: 'value2',
  value3: 'value3',
  inheri: { valueIn1: 'ValueIn11', valueIn2: 'valueIn12' }
};

const {
  inheri: { valueIn1, valueIn2 }
} = obj1;

console.log(valueIn1, valueIn2);
