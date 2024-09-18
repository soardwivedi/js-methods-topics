function isPrime(number) {
    if (number <= 1) {
     return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
         return false
        }
    }
    return true;
}

function findPrimes(start, end) {
    const primes = [];

    for (let number = start; number <= end; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }
    return primes;
}

let start = 1;
let end = 100;

let primeNumbers = findPrimes(start, end);
console.log(primeNumbers);