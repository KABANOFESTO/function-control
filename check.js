const equalArgs = (num1, num2) => {
    if (num1 == num2 && typeof (num1) == typeof (num2)) {
        return true;
    } else {
        return false;
    }
}
const result = equalArgs('3', '3');
console.log(result);