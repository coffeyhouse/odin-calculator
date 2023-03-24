let firstNumber;
let secondNumber;
let operator;

let displayValue = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "x":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}

const numbers = document.querySelectorAll("button.number");
numbers.forEach(number => {
    number.addEventListener("click", numberClicked);
});

const operators = document.querySelectorAll("button.operator");
operators.forEach(operator => {
    operator.addEventListener("click", operatorClicked);
});

const equals = document.querySelector("button.equals");
equals.addEventListener("click", equalsClicked);

function numberClicked() {
    if (displayValue === null) {
        displayValue = this.value;
    } else {
        displayValue = `${displayValue}${this.value}`;
    }

    updateDisplayValue(displayValue);
}

function operatorClicked() {
    if (displayValue !== null) {
        firstNumber = displayValue;
        operator = this.value;
        displayValue = null;
    }
}

function equalsClicked() {
    if (firstNumber && operator && displayValue) {
        secondNumber = displayValue;
        const result = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
        updateDisplayValue(result);
        updateOperationValue();

        displayValue = result;

    }
}

function updateDisplayValue(val) {
    const displayDiv = document.querySelector("#result");
    displayDiv.textContent = val;
}

function updateOperationValue() {
    const operationDiv = document.querySelector("#operation");
    operationDiv.textContent = `${firstNumber}${operator}${secondNumber}`
}