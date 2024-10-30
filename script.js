let currentInput = '0';
let previousInput = '';
let operation = null;

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operation = op;
}

function calculate() {
    if (operation === null) return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operation) {
        case '+':
            currentInput = (prev + curr).toString();
            break;
        case '-':
            currentInput = (prev - curr).toString();
            break;
        case '*':
            currentInput = (prev * curr).toString();
            break;
        case '/':
            currentInput = (prev / curr).toString();
            break;
    }
    operation = null;
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}