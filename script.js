// vars
const screen = document.getElementById("display-numbers");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById('=');
const AC = document.getElementById('AC');
const C = document.getElementById("C");

let operA = null;
let operB = null;
let numChanger = false;
let calculation = false;
let operator = null;
screen.textContent = '0';

// button-events
numbers.forEach(function (event) {
    event.addEventListener("click", appendScreen);
});

operators.forEach(function (event) {
    event.addEventListener("click", () => {
        numChanger = true;
        if (numChanger == true) makeCalc();
        operator = event.innerHTML;
    });
});

equal.addEventListener("click", makeCalcEqual);
AC.addEventListener("click", resetAll);
C.addEventListener("click", resetOne);

//functions

function appendScreen(event) {
    if (screen.textContent == '0') {
        screen.textContent = null;
    }
    if (calculation == true) {
        screen.textContent = null;
        calculation = false;
    }
    if (numChanger == false) {
        screen.append(event.target.innerHTML);
        operA = Number(screen.textContent);
    } else {
        if (operB == null) {
            screen.textContent = null;
            screen.append(event.target.innerHTML);
            operB = Number(screen.textContent);
        } else {
            screen.append(event.target.innerHTML);
            operB = Number(screen.textContent);
        }
    }
}
function makeCalc() {
    if (operB == null) return;
    clearScreen();
    screen.textContent = (operate(operA, operB, operator));
    operA = Number(screen.textContent);
    operB = null;
}
function makeCalcEqual() {
    if (operB == null) return;
    clearScreen();
    screen.textContent = operate(operA, operB, operator);
    operA = Number(screen.textContent);
    operB = null;
    calculation = true;
    numChanger = false;
}
function clearScreen() {
    screen.textContent = '0';
}
function resetAll() {
    clearScreen();
    operA = null;
    operB = null;
    numChanger = false;
    operator = null;
}
function resetOne() {
    screen.textContent = screen.textContent.slice(0, -1);
    if (numChanger == false) operA = Number(screen.textContent);
    else operB = Number(screen.textContent);
    console.table(operA, operB);
}
function operate(operA, operB, operator) {
    switch (operator) {
        case "+":
            return add(operA, operB);
        case "-":
            return sub(operA, operB);
        case "*":
            return multi(operA, operB);
        case "/":
            return divide(operA, operB);
    }
}
add = (a, b) => a + b;
sub = (a, b) => a - b;
multi = (a, b) => a * b;
divide = (a, b) => a / b;
