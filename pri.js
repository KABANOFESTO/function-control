const isPrime = n => {

    if (n <= 1) {
        return false;
    }
    for (i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const checkNum = 1;
const result = isPrime(checkNum);
if (result) {
    console.log(`${checkNum} is a prime number`);
} else {
    console.log(`${checkNum} is not a prime number`);
}