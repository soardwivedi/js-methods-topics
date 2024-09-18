// const array = [1, 3, 4, 2, 3, 2];

// const nonDuplicat = array.reduce((acc, curr)=>{
// if(!acc.includes(curr)){
//     acc.push(curr)
// }
// return acc;
// }, [])


// console.log(nonDuplicat.sort((a, b)=>a-b));
// console.log(21/2);


const str = "abccba"
function checkPalindrom(str) {
    let len = str.length/2;
    for(let i= 0; i<len; i++){
        if(str[i] !== str[str.length-1-i]){
            console.log(str[i])
            return "it is not a pli"
        }
        return "it is plindrom"
    }
}

const palind = checkPalindrom(str);
console.log(palind)