function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (b === 0){
        return "ERROR: Can't divide by zero.";
    }
    return a/b;
}

let numOne = 0;
let numTwo = 0;
let operator = "";

function operate(numOne, numTwo, operator){
    switch (operator){
        case 'add':
            return add(numOne, numTwo);
        case 'subtract':
            return subtract(numOne, numTwo);
        case 'multiply':
            return multiply(numOne, numTwo);
        case 'divide':
            return divide(numOne, numTwo);
        default:
            return "ERROR: No operator selected.";
    }
}

let = displayValue = [];

const button1 = document.getElementById("btn1");
button1.addEventListener("click", () => {
    displayValue.push("1");
});
