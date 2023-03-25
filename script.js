let currentNumber;
let storedNumber;
let operator;

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

const clear = document.querySelector("button.clear");
clear.addEventListener("click", clearCalculator);

function numberClicked() {
    if (!currentNumber) {
        currentNumber = this.value;
    } else {
        currentNumber = `${currentNumber}${this.value}`
    }

    updateDisplayValue(currentNumber);
}

function operatorClicked() {

    if (currentNumber && !storedNumber) {
        operator = this.value;
        storedNumber = currentNumber;
        currentNumber = null;
    }

    if (currentNumber && storedNumber) {
        equalsClicked();
    }
    operator = this.value;

    updateOperationValue();
}

function equalsClicked() {
    if (currentNumber && storedNumber && operator) {
        const a = parseFloat(storedNumber);
        const b = parseFloat(currentNumber);
        const result = operate(a, b, operator);
        console.log(result);
        updateDisplayValue(round(result));
        updateOperationValue();

        storedNumber = result;
        currentNumber = null;
    } else {
        console.log("not ready")
    }
}

function updateDisplayValue(val) {
    const displayDiv = document.querySelector("#result");
    displayDiv.textContent = val;
}

function updateOperationValue() {
    const operationDiv = document.querySelector("#operation");
    let stored = "";
    let current = "";
    let operatorValue = "";

    if (currentNumber) {
        current = round(currentNumber);
    }

    if (storedNumber) {
        stored = round(storedNumber);
    } 

    if (operator) {
        operatorValue = operator;
    }
    operationDiv.textContent = `${stored} ${operatorValue} ${current}`
}

function round(number) {
    const factorOfTen = Math.pow(10, 5);
    return Math.round(number * factorOfTen) / factorOfTen;
}

function clearCalculator() {
    currentNumber = null;
    storedNumber = null;
    operator = null;
    updateDisplayValue();
    updateOperationValue();
}