let arr = [1, 3, 4, 5];

let all3 = arr.map ( (currentValue, index, array) => {
    console.log(currentValue);
    // console.log(index);
    // console.log(array);
    return currentValue * 2;
});

console.log(all3);