const reverseString = inputString => {
    const words = inputString.split(/\s+/);
    if (words) {
        const reverseSentence = words.reverse();
        const reversedString = reverseSentence.join(' ');
        return reversedString;
    } else {
        return "doesn't sentence"
    }
}
const input = "hey dude are you good!";
const result = reverseString(input);
console.log(result);