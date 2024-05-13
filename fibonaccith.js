const fibonnacci = n => {
    if (n <= 0) {
        return 'invalid input,use positive number';
    }
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        let fibArray = [0, 1];
        for (i = 2; i < n; i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
        return fibArray[n - 1];
    }
}
const numbr = 7;
const result = fibonnacci(numbr);
console.log(result);
