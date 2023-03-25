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

        case "÷":
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

const dot = document.querySelector("button.dot");

function numberClicked() {
    if (!currentNumber) {
        updateOperationValue();
        if (this.value === ".") {
            currentNumber = "0.";
        } else {
            currentNumber = this.value;
        }
    } else {
        currentNumber = `${currentNumber}${this.value}`
    }

    if (this.value === ".") {
        dot.setAttribute("disabled", true);
    }

    updateDisplayValue(currentNumber);
}

function operatorClicked() {
    dot.removeAttribute("disabled");
    if (!currentNumber) {
        currentNumber = "0";
    }

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
        dot.removeAttribute("disabled");
        const a = parseFloat(storedNumber);
        const b = parseFloat(currentNumber);
        if (currentNumber == 0 & operator === "÷") {
            updateDisplayValue("8008135");
            updateOperationValue();
            storedNumber = null;
            currentNumber = null;
        } else {
            const result = operate(a, b, operator);
            updateDisplayValue(round(result));
            updateOperationValue();
            storedNumber = result;
            currentNumber = null;
        }

    } else {
        console.log("not ready")
    }
}

function updateDisplayValue(val) {
    const displayDiv = document.querySelector("#result");
    displayDiv.textContent = val;
}

function updateOperationValue(val) {
    const number1 = document.querySelector("#operation #number-1");
    const number2 = document.querySelector("#operation #number-2");
    const oper = document.querySelector("#operation #operator");
    let stored = "";
    let current = "";
    let operatorValue = "";

    if (currentNumber) {
        current = round(currentNumber);
    }

    if (storedNumber || storedNumber == 0) {
        stored = round(storedNumber);
    }

    if (operator) {
        operatorValue = operator;
    }
    number1.textContent = stored;
    number2.textContent = current;
    oper.textContent = operator;

    if (val) {
        number1.textContent = val;
    }
}

function round(number) {
    const factorOfTen = Math.pow(10, 5);
    return Math.round(number * factorOfTen) / factorOfTen;
}

function clearCalculator() {
    currentNumber = null;
    storedNumber = null;
    operator = null;
    updateDisplayValue("");
    updateOperationValue("CLEARED");
}