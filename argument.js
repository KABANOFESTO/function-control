
function performOperation(num1, operator, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input: Please enter valid numbers.";
    }
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator!";
    }

    return result;
}

const num1 = 2;
const operator = '-';
const num2 = 4;

const calculationResult = performOperation(num1, operator, num2);
console.log(`Result: ${calculationResult}`);
