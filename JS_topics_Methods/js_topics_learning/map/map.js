const arr = [5, 1, 3, 2, 6]

//Double

// function double(x){
//     return x*2;
// }
// const outputDouble = arr.map(double)
// console.log(outputDouble);


// function triple(x){
//     return x*3;
// }
// const outputTripal = arr.map(triple);

// console.log(outputTripal);


// function binary(x){
//     return x.toString(2);
// }
// const outputBinary = arr.map(binary);

// console.log(outputBinary);


// function adddd(z){
//    return z + "add"
// }
// const outputAdd = arr.map(adddd);
// console.log(outputAdd);

// function fifth(x){
//     return x*5
// }
// const outputfifth = arr.map(fifth);

// console.log(outputfifth);


function isOdd(z){
    return z%2;
}
const outputOdd = arr.filter(isOdd);
console.log(outputOdd);