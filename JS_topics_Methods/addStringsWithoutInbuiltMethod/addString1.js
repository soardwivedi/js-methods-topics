let str = 'asdf';
let strNew = 'asdfasdf';

for (let i = 0; i < strNew.length; i++) {
  str += strNew[i];
  console.log(str);
}

console.log(str);
console.log('asdf');
