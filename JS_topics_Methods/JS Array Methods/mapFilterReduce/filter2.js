let num = [2, 4, 3, 7, 99, 23, 47, 88, 8];

let filterEven = (i)=>{
if(i%2 == 0){
    return i;
}
}

let onlyEven = num.filter(filterEven);

console.log(onlyEven);
console.log(num.at(2))