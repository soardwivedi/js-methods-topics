function primeNumbers(x){
    for (let i = 2; i<=Math.sqrt(x); i++){
        if(x%i == 0){
            console.log(`${x} is a not a prime number.`);
            break
        }
        if(x% i !== 0){
            console.log(`${x} is a prime number.`);
        }
    }
}
primeNumbers(4)