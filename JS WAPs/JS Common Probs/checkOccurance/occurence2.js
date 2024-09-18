let data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4,"a"];


let countData = data.reduce((acc, curr)=> {
    // console.log(curr);
    
    if(!acc[curr]){
        acc[curr] = 0;
    }
    acc[curr]++
    return acc;
}, {})

console.log(countData);