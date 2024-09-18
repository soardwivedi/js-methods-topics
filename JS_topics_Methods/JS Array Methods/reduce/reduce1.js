const array = [1, 2, 4, 3, 5];

const sum = array.reduce((acc, curr) => {
  curr = acc + curr;
  return curr;
}, 0);

// console.log(sum)

const sum1 = array.reduce((acc, curr)=>{
  console.log("acc",acc);
  console.log("curr", curr);
curr = acc + curr;
return curr;
})
console.log(sum1);