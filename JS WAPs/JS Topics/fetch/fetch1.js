
const { response } = require("express");

var obj;

fetch('https://api.github.com/users/hiteshchoudhary')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
   });