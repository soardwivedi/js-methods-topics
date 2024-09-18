function checkPrime(number){
    for(let i = 2; i<= Math.sqrt(number); i++){
        if (number% i === 0){
            return false
        }
    }
    return true
}

function primeNum(start, end){
    let primeNumbers = [];
    for(let number = start; number<= end; number++){
        if(checkPrime(number)){
primeNumbers.push(number)
        }
    }
    return primeNumbers
}

console.log(primeNum(1, 100));