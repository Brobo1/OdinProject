const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const addItem = () => {
  const value = input.value;
  input.value = "";
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = value;
  button.textContent = "Delete";

  li.append(span, button);
  ul.appendChild(li);

  button.addEventListener("click", () => {
    li.remove();
  });
  input.focus();
};

btn.addEventListener("click", addItem);
