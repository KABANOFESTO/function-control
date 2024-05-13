const reversing = input => {
    const revesed = input.match(/[a-z]/g);
    if (!revesed) {
        return 'use right one!!!';
    } else {
        return revesed.reverse().join('');
    }
}
const name = 'kabano';
const result = reversing(name);
console.log(result);