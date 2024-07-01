const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const buttons = document.getElementById("buttons");
const displayScr = document.getElementById("screenText");

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
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

function populateDisplay(str) {
  displayScr.innerText = str;
}

function appendNum(num) {
  if (displayScr.innerText === "0") {
    text = "";
  }
  text += num;
}

buttons.addEventListener("click", (e) => {
  let name = e.target.name;
  if (name === "number" || name === "symbol") {
    appendNum(e.target.innerText);
  }
  if (name === "equals") {
    let vars = text.match(/\d+(\.\d+)?|\S/g);
    text = operate(...vars);
    console.log(vars);
  }
  if (name === "clear") {
    text = "0";
  }
  populateDisplay(text);
});
