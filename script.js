let firstNumber;
let secondNumber;
let operator;

let displayValue = null;

function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log(a / b);
}

function operate(a, b, operator) {
    switch (operator) {
        case "add":
            add(a, b);
            break;

        case "subtract":
            subtract(a, b);
            break;

        case "multiply":
            multiply(a, b);
            break;

        case "divide":
            divide(a, b);
            break;
    }
}

const numbers = document.querySelectorAll("button.number");
numbers.forEach(number => {
    number.addEventListener("click", updateDisplayValue);
});

function updateDisplayValue() {
    const displayDiv = document.querySelector("#result");
    if (displayValue === null) {
        displayValue = this.value;
    } else {
        displayValue = `${displayValue}${this.value}`;
    }
    displayDiv.textContent = displayValue;
}