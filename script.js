let firstNumber;
let secondNumber;
let operator;

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