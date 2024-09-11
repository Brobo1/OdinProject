import "./styles.css";
import arrowDown from "./assets/arrowDown.svg";
import * as test from "./components/test-data.js";

const container = document.getElementById("container");

function todoCard(todo) {
  const notes = todo.notes.map((note) => `<p>${note}</p>`).join(" ");
  const checklist = todo.checklist.map((item) => `<p>${item}</p>`).join(" ");
  return `
  <div class="card-container">
    <div class="card-title-container">
      <p class="card-component card-title">${todo.title}</p>
      <img class="arrow-icon" src="${arrowDown}" alt="arrow icon">
    </div>
    <p class="card-component card-description">${todo.description}</p>
    <p class="card-component card-duedate">${todo.dueDate}</p>
    <p class="card-component card-priority">${todo.priority}</p>
    <div class="card-component card-notes">${notes}</div>
    <div class="card-component card-checklist">${checklist}</div>
  </div>
  `;
}

container.innerHTML = todoCard(test.testTodo);
