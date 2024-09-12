import "./styles.css";
import arrowDown from "./assets/arrowDown.svg";
import editPen from "./assets/pencil-svgrepo-com.svg";
import * as test from "./components/test-data.js";

const container = document.getElementById("container");

function todoCard(todo) {
  const notes = todo.notes.map((note) => `<p>${note}</p>`).join(" ");
  const checklist = todo.checklist
    .map(
      (item) => `
  <div class="checkpoint-container">
      <input type="checkbox">
      <p>${item.str}</p>
  </div>`,
    )
    .join(" ");
  return `
  <div class="card-container">
    <div class="card-item-container card-title-container">
      <p class="card-component card-title">${todo.title}</p>
    </div>
    <div class="card-item-container card-description-container">
      <p class="card-component card-description">${todo.description}</p>
    </div>
    <div class="card-item-container card-duedate-container">
      <p class="card-component card-duedate">${todo.dueDate}</p>
    </div>
    <div class="card-item-container card-priority-container">
      <p class="card-component card-priority">${todo.priority}</p>
    </div>
    <div class="card-component card-notes">${notes}</div>
    <div class="card-component card-checklist">${checklist}</div>
  </div>
  `;
}

container.innerHTML = todoCard(test.testTodo);

function showEdit(cardContainer) {
  let isHover = false;

  container.addEventListener(
    "mouseenter",
    (e) => {
      const target = e.target;
      if (
        target.classList.contains(`card-${cardContainer}-container`) &&
        !isHover
      ) {
        isHover = true;
        target.innerHTML += `<img src="${editPen}" class="card-edit-icon" alt="Edit Icon">`;

        target
          .querySelector(".card-edit-icon")
          .addEventListener("click", (clickEvent) => {
            target.children[0].contentEditable = true;
          });
      }
    },
    true,
  );

  container.addEventListener(
    "mouseleave",
    (e) => {
      const target = e.target;
      if (
        target.classList.contains(`card-${cardContainer}-container`) &&
        isHover
      ) {
        isHover = false;
        const getChild = Array.from(target.children).filter((child) =>
          child.classList.contains("card-edit-icon"),
        );

        if (getChild.length > 0) {
          target.removeChild(getChild[0]);
        }
      }
    },
    true,
  );
}

showEdit("title");
showEdit("description");
showEdit("duedate");
showEdit("priority");
