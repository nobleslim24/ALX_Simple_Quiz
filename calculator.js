// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Get elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Handle button clicks
document.getElementById('add').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = divide(num1, num2);
});
