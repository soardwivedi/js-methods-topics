let arr = ['a', 'b', 'd', 'e', 'f', 'g'];
console.log(arr);

const newArr = arr.splice(0, 3, '1', '2', 4, []);

console.log(newArr);

console.log(arr);
