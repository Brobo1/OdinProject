import "./styles.css";
import arrowDown from "./assets/arrowDown.svg";

const container = document.getElementById("container");

const date = new Date();

function createTodo(
  title,
  description,
  dueDate,
  priority,
  notes = [],
  checklist = [],
) {
  const id = 0;
  return { id, title, description, dueDate, priority, notes, checklist };
}

const testTodo = createTodo(
  "ayoo",
  "this is ayo...",
  "tomorrow",
  `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
  ["One", "Two", "Three", "Four", "Five", "six."],
  ["One", "Two", "Three", "Four", "Five", "six?"],
);

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

container.innerHTML = todoCard(testTodo);
