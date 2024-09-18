const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 1, 4, 1];

const allElementsPresent = array2.every(element => array1.includes(element));

console.log(allElementsPresent); // true
