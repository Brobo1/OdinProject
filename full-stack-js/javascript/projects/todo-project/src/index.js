import "./styles.css";

const container = document.getElementById("container");

function createTodo(
  title,
  description,
  dueDate,
  priority,
  notes = [],
  checklist = [],
) {
  return { title, description, dueDate, priority, notes, checklist };
}

const testTodo = createTodo(
  "ayoo",
  "this is ayo...",
  "tomorrow",
  9,
  ["One", "Two", "Three", "Four", "Five", "six.", "----"],
  ["One", "Two", "Three", "Four", "Five", "six?"],
);
const testTodo2 = createTodo(
  "teste2",
  "this is ayo2...",
  "todaye",
  9,
  ["One", "Two", "Three", "Four", "Five", "six.", "----"],
  ["One", "Two", "Three", "Four", "Five", "six?"],
);

function todoCard(todo) {
  const notes = todo.notes.map((note) => `<p>${note}</p>`).join(" ");
  const checklist = todo.checklist.map((item) => `<p>${item}</p>`).join(" ");
  return `
  <div class="card-container">
    <p class="card-title">${todo.title}</p>
    <p class="card-description">${todo.description}</p>
    <p class="card-duedate">${todo.dueDate}</p>
    <p class="card-priority">${todo.priority}</p>
    <div class="card-notes">${notes}</div>
    <div class="card-checklist">${checklist}</div>
  </div>
  `;
}

container.innerHTML = todoCard(testTodo);
