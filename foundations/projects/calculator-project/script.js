const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const buttons = document.getElementById("buttons");
const displayScr = document.getElementById("screenText");
const displayScrFull = document.getElementById("screenTextFull");
const screenDiv = document.getElementById("screen");
let num1 = "";
let num2 = "";
let operator = null;
let forceReset = false;

let text = "";

const addNumbers = () => {
  let numberPad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="];
  numberPad.forEach((number) => {
    let numBtn = document.createElement("button");
    numBtn.type = "button";
    numBtn.name = "number";
    numBtn.innerText = number;
    if (numBtn.innerText === "=") {
      numBtn.name = "equals";
    }
    if (numBtn.innerText === ".") {
      numBtn.name = "dot";
    }
    numBtn.className = "number";
    numbers.appendChild(numBtn);
  });
};
const addSymbols = () => {
  let symbolPad = ["/", "*", "-", "+"];
  symbolPad.forEach((symbol) => {
    let symBtn = document.createElement("button");
    symBtn.type = "button";
    symBtn.name = "symbol";
    symBtn.innerText = symbol;
    symBtn.className = "symbol";
    symbols.appendChild(symBtn);
  });
};
const createPad = () => {
  addNumbers();
  addSymbols();
};

createPad();

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

function del() {
  text = text.slice(0, text.length - 1);
}

function operate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

function populateDisplay(str) {
  if (str === "") {
    str = "0";
  }
  displayScr.innerText = str;
}

function dot(str) {
  if (!str.includes(".")) {
    text = displayScr.innerText + ".";
  }
}

function appendNum(num) {
  if (displayScr.innerText === "0") {
    text = "";
  }
  text += num;
}

function setOp(curOp) {
  num1 = text;
  if (num1) {
    operator = curOp;
    displayScrFull.innerText = `${num1} ${operator}`;
    text = "";
  }
  forceReset = true;
}

function equals() {
  if (!num2 || forceReset) {
    num2 = text;
  }

  if (operator !== null) {
    text = (
      Math.round(operate(num1, operator, num2) * 10000) / 10000
    ).toString();
    displayScrFull.innerText = `${num1} ${operator} ${num2} =`;
  }
  num1 = text;
  forceReset = false;
}
let fontSize = 40;

function clear() {
  text = "";
  displayScrFull.innerText = "";
  num1 = "";
  num2 = "";
  operator = null;
  fontSize = 40;
  displayScr.style.fontSize = "40px";
}

buttons.addEventListener("click", (e) => {
  if (displayScr.offsetWidth >= screenDiv.offsetWidth - 30) {
    displayScr.style.fontSize = `${(fontSize -= 2)}px`;
    displayScrFull.style.fontSize = `${(fontSize -= 2)}px`;
  }

  let name = e.target.name;
  if (name === "equals") {
    equals();
  }
  if (name === "number") {
    appendNum(e.target.innerText);
  }
  if (name === "dot") {
    dot(text);
  }
  if (name === "clear") {
    clear();
  }
  if (name === "delete") {
    del();
  }

  if (name === "symbol") {
    setOp(e.target.innerText);
  }
  if (
    name === "equals" ||
    name === "number" ||
    name === "dot" ||
    name === "clear" ||
    name === "delete"
  ) {
    populateDisplay(text);
  }
});
