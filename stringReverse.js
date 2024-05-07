const stringReverse = inputString => {
    const words = inputString.split(/\s+/);
    if (words) {
        const reverseString = words.reverse();
        const reversedString = reverseString.join(' ');
        return reversedString;
    } else {
        return inputString;
    }
    
}
const inputString = 'hello mr president!';
const result = stringReverse(inputString);
console.log(result);