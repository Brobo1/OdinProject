const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const numberPad = document.getElementById("number-pad");
const displayScr = document.getElementById("screenText");
let num1;
let num2;
let operator;

const addNumbers = () => {
  let numberPad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "C", "="];
  numberPad.forEach((number) => {
    let numBtn = document.createElement("button");
    numBtn.type = "button";
    numBtn.name = "number";
    numBtn.innerText = number;
    if (numBtn.innerText === "") {
      numBtn.disabled = true;
    }
    if (numBtn.innerText === "=") {
      numBtn.name = "equals";
    }
    if (numBtn.innerText === "C") {
      numBtn.name = "clear";
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

function operate(num1, operator, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

function populateDisplay(str) {
  displayScr.innerText = str;
}

let text = "";
numberPad.addEventListener("click", (e) => {
  let name = e.target.name;
  if (name === "number" || name === "symbol") {
    text += e.target.innerText;
  }
  if (name === "equals") {
    let vars = text.match(/\d+|\S/g);
    text = operate(...vars);
    console.log(operate(...vars));
  }
  if (name === "clear") {
    text = "";
  }
  populateDisplay(text);
});
