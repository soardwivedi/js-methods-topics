// It is techanique in functional programing, that transforms the function of
// multiple arguments into the seversl function of single argument in sequence.

function multiply(x){
    return (y)=>{ 
        return (z)=>{
            return  x * y * z
        }
    }
}

console.log(multiply(3)(4)(5));