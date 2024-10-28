let str = 'Hello World';
let arr = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ' || str[i] != undefined) arr[i] = str[i];
  console.log(arr[i]);
  console.log(str[i]);
}

console.log(arr);
