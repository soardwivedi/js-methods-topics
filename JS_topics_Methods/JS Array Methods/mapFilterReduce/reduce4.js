let data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4,"a"];


console.log(countOccurrences);

let checkOccurance = data.reduce((acc, curr)=>{
    if(!acc[curr]) {
        acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
}, {})