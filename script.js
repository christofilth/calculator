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

let numOne = "";
let numTwo = "";
let operator = "";

function operate(numOne, numTwo, operator){
    switch (operator){
        case 'add':
            return Math.round(add(numOne, numTwo) * 1e9) / 1e9;
        case 'subtract':
            return Math.round(subtract(numOne, numTwo)* 1e9) / 1e9;
        case 'multiply':
            return Math.round(multiply(numOne, numTwo)* 1e9) / 1e9;
        case 'divide':
            return Math.round(divide(numOne, numTwo)* 1e9) / 1e9;
        default:
            return "ERROR: No operator selected.";
    }
}

let displayValue = ["0"];
document.getElementById("screen").innerText = displayValue.join("");


const button1 = document.getElementById("btn1");
button1.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("1");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button2 = document.getElementById("btn2");
button2.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("2");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button3 = document.getElementById("btn3");
button3.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("3");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button4 = document.getElementById("btn4");
button4.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("4");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button5 = document.getElementById("btn5");
button5.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("5");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button6 = document.getElementById("btn6");
button6.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("6");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button7 = document.getElementById("btn7");
button7.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("7");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button8 = document.getElementById("btn8");
button8.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("8");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button9 = document.getElementById("btn9");
button9.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("9");
    document.getElementById("screen").innerText = displayValue.join("");
});

const button0 = document.getElementById("btn0");
button0.addEventListener("click", () => {
    if (displayValue.join("") === "0") {
        displayValue = [];
    }
    displayValue.push("0");
    document.getElementById("screen").innerText = displayValue.join("");
});

const buttonAdd = document.getElementById("btn+");
buttonAdd.addEventListener("click", () => {
    if (numOne === "") {
        numOne = displayValue.join("");
        operator = 'add';
        displayValue = []; 
    } else if (numOne !== "" && operator === ""){
        operator = 'add';
        displayValue = [];
    } else {
        operator = 'add';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        
    }
});

const buttonSubtract = document.getElementById("btn-");
buttonSubtract.addEventListener("click", () => {
    if (numOne === "") {
        numOne = displayValue.join("");
        operator = 'subtract';
        displayValue = []; 
    } else if (numOne !== "" && operator === ""){
        operator = 'subtract';
        displayValue = [];
    } else {
        operator = 'subtract';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
    }
});

const buttonMultiply = document.getElementById("btn*");
buttonMultiply.addEventListener("click", () => {
    if (numOne === "") {
        numOne = displayValue.join("");
        operator = 'multiply';
        displayValue = []; 
    } else if (numOne !== "" && operator === ""){
        operator = 'multiply';
        displayValue = [];
    } else {
        operator = 'multiply';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
    }
});

const buttonDivide = document.getElementById("btn/");
buttonDivide.addEventListener("click", () => {
    if (numOne === "" && operator === "") {
        numOne = displayValue.join("");
        operator = 'divide';
        displayValue = []; 
    } else if (numOne !== "" && operator === ""){
        operator = 'divide';
        displayValue = [];
    } else {
        operator = 'divide';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
    }
});

const buttonEquals = document.getElementById("btn=");
buttonEquals.addEventListener("click", () => {
   if (operator !== "") {
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        operator = "";
    } 
   numOne = displayValue.join("");
   document.getElementById("screen").innerText = displayValue.join("");
   operator = "";
});