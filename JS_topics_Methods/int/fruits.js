const fruitsArray = [
    {'name' : 'Ganesh', 'fruits' : 3},
    {'name' : 'Ashu', 'fruits' : 19},
    {'name' : 'Sneha', 'fruits' : 89},
    {'name' : 'Vishu', 'fruits' : 33},
    {'name' : 'Suraj', 'fruits' : 73},
    {'name' : 'Prem', 'fruits' : 29},
    {'name' : 'Pranita', 'fruits' : 51},
    {'name' : 'Pratik', 'fruits' : 47},
    {'name' : 'Himesh', 'fruits' : 4},
    {'name' : 'Vishal', 'fruits' : 12},
    {'name' : 'Raj', 'fruits' : 58},
    {'name' : 'Sumit', 'fruits' : 42},
    {'name' : 'Rudra', 'fruits' : 30},
    {'name' : 'Bakula', 'fruits' : 66},
    {'name' : 'Amruta', 'fruits' : 76},
    {'name' : 'Sandip', 'fruits' : 80}
];

let evenFruits = [];
let oddFruits = [];

for (let i = 0; i< fruitsArray.length; i++ ){
    if (fruitsArray[i].fruits%2 ==0 ){
        evenFruits.push(fruitsArray[i])
    }
    else{
        oddFruits.push(fruitsArray[i])
    }
}

console.log(evenFruits);
console.log(oddFruits);


const evenFruitsSum = evenFruits.reduce((total, curr ) => total+= curr.fruits, 0)

console.log(evenFruitsSum);

const oddFruitsSum = oddFruits.reduce((total, curr ) => total+= curr.fruits, 0)

console.log(oddFruitsSum);
