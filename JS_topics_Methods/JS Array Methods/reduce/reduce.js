let arr = [3, 7, 4];

let sumArr = arr.reduce((acc, curr)=>{
   curr = acc + curr;

    return curr;
}, 0)

console.log(sumArr);

let findMax = arr.reduce((max, curr)=>{
if(curr > max){
    max = curr;
}
return max;
}, 0)

console.log(findMax);