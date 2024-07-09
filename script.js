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
let decimalPressed = false;

function operate(numOne, numTwo, operator){
    switch (operator){
        case 'add':
            return Math.round(add(numOne, numTwo) * 1e9) / 1e9;
        case 'subtract':
            return Math.round(subtract(numOne, numTwo)* 1e9) / 1e9;
        case 'multiply':
            return Math.round(multiply(numOne, numTwo)* 1e9) / 1e9;
        case 'divide':
            const result = divide(numOne, numTwo);
            return typeof result === "string" ? result : Math.round(divide(numOne, numTwo)* 1e9) / 1e9;
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
        decimalPressed = false
    } else if (numOne !== "" && operator === ""){
        operator = 'add';
        displayValue = [];
        decimalPressed = false
    } else {
        operator = 'add';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
        decimalPressed = false
    }
});

const buttonSubtract = document.getElementById("btn-");
buttonSubtract.addEventListener("click", () => {
    if (numOne === "") {
        numOne = displayValue.join("");
        operator = 'subtract';
        displayValue = []; 
        decimalPressed = false
    } else if (numOne !== "" && operator === ""){
        operator = 'subtract';
        displayValue = [];
        decimalPressed = false
    } else {
        operator = 'subtract';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
        decimalPressed = false
    }
});

const buttonMultiply = document.getElementById("btn*");
buttonMultiply.addEventListener("click", () => {
    if (numOne === "") {
        numOne = displayValue.join("");
        operator = 'multiply';
        decimalPressed = false
        displayValue = []; 
    } else if (numOne !== "" && operator === ""){
        operator = 'multiply';
        displayValue = [];
        decimalPressed = false
    } else {
        operator = 'multiply';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
        decimalPressed = false
    }
});

const buttonDivide = document.getElementById("btn/");
buttonDivide.addEventListener("click", () => {
    if (numOne === "" && operator === "") {
        numOne = displayValue.join("");
        operator = 'divide';
        displayValue = []; 
        decimalPressed = false
    } else if (numOne !== "" && operator === ""){
        operator = 'divide';
        displayValue = [];
        decimalPressed = false
    } else {
        operator = 'divide';
        numTwo = displayValue.join("");
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        displayValue = [];
        decimalPressed = false
    }
});

const buttonEquals = document.getElementById("btn=");
buttonEquals.addEventListener("click", () => {
   if (operator !== "") {
        numTwo = displayValue.join("");
        if (numTwo === "") {
            numTwo = numOne;
        }
        displayValue = [`${operate(parseFloat(numOne), parseFloat(numTwo), operator)}`];
        console.log(numOne);
        console.log(numTwo);
        console.log(operator);
        document.getElementById("screen").innerText = displayValue.join("");
        numOne = displayValue[0];
        numTwo = "";
        operator = "";
        decimalPressed = false
        
    } 
   numOne = displayValue.join("");
   document.getElementById("screen").innerText = displayValue.join("");
   operator = "";
   decimalPressed = false
});

const buttonClear = document.getElementById("btnAC");
buttonClear.addEventListener("click", () => {
    numOne = "";
    numTwo = "";
    operator = "";
    displayValue = ["0"];
    decimalPressed = false;
    document.getElementById("screen").innerText = displayValue.join("");
});

const buttonBackspace = document.getElementById("btnBack");
buttonBackspace.addEventListener("click", () => {
    displayValue.pop()
    document.getElementById("screen").innerText = displayValue.join("");
});

const buttonDecimal = document.getElementById("btnDec");
buttonDecimal.addEventListener("click", () => {
    if (!decimalPressed) {
        if (displayValue.length === 0) {
            displayValue.push("0")
        }
        displayValue.push(".")
        document.getElementById("screen").innerText = displayValue.join("");
        decimalPressed = true;
    }
});

addEventListener("keydown", (event) => {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        document.getElementById(`btn${key}`).click();
    } else if (key === "+"){
        document.getElementById("btn+").click();
    } else if (key === "-"){
        document.getElementById("btn-").click();
    } else if (key === "/"){
        document.getElementById("btn/").click();
    } else if (key === "*"){
        document.getElementById("btn*").click();
    } else if (key === "=" || key === "Enter"){
        document.getElementById("btn=").click();
    } else if (key === "."){
        document.getElementById("btnDec").click();
    } else if (key === "Backspace"){
        document.getElementById("btnBack").click();
    } else if (key === "Escape"){
        document.getElementById("btnAC").click();
    }
});