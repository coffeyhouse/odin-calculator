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
        case "add":
            return add(a, b);

        case "subtract":
            return subtract(a, b);

        case "multiply":
            return multiply(a, b);

        case "divide":
            return divide(a, b);
    }
}

const numbers = document.querySelectorAll("button.number");
numbers.forEach(number => {
    number.addEventListener("click", updateDisplayValue);
});

const operators = document.querySelectorAll("button.operator");
operators.forEach(operator => {
    operator.addEventListener("click", operatorClicked);
});

const equals = document.querySelector("button.equals");
equals.addEventListener("click", equalsClicked);

function updateDisplayValue() {
    const displayDiv = document.querySelector("#result");
    if (displayValue === null) {
        displayValue = this.value;
    } else {
        displayValue = `${displayValue}${this.value}`;
    }
    displayDiv.textContent = displayValue;
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
        const displayDiv = document.querySelector("#result");
        
        displayDiv.textContent = result;
        displayValue = result;

    }
}