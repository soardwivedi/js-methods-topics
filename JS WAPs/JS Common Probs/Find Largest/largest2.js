let arr = [23, 34 , 56 , 2];

const largestNumber = arr.reduce((max, curr)=> {
    if (curr > max){
        max = curr;
    }
    return max;
}, 0)

console.log(largestNumber);