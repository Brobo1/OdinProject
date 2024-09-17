import "./styles.css";
import arrowDown from "./assets/arrowDown.svg";
import editPen from "./assets/pencil-svgrepo-com.svg";
import { newCard } from "./components/new-card";
import { createCard } from "./components/create-card";

const container = document.getElementById("container");

function getStorage() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  if (cards)
    cards.map((card) => {
      container.innerHTML += `
    <div class="card-container">
      <div class="card-item-container card-title-container">
        <p class="card-component card-title">${card.title}</p>
      </div>
      <div class="card-item-container card-description-container">
        <p class="card-component card-description">${card.description}</p>
      </div>
      <div class="card-item-container card-duedate-container">
        <p class="card-component card-duedate">${card.dueDate}</p>
      </div>
      <div class="card-item-container card-priority-container">
        <p class="card-component card-priority">${card.priority}</p>
      </div>
    </div>
    `;
    });
}

getStorage();

function showEdit(cardContainer) {
  let isHover = false;
  let isEdit;

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
          .addEventListener("click", () => {
            isEdit = !isEdit;
            const editableElement = target.children[0];
            editableElement.contentEditable = isEdit;
            if (isEdit) {
              editableElement.style.outline = "white 1px solid";
              editableElement.addEventListener("blur", () => {
                updateLocalStorage(
                  target,
                  cardContainer,
                  editableElement.textContent,
                );
              });
            } else {
              editableElement.style.outline = "none";
            }
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

function updateLocalStorage(target, cardContainer, newValue) {
  const cards = JSON.parse(localStorage.getItem("cards"));
  const cardIndex = Array.from(container.children).indexOf(
    target.parentElement,
  );
  if (cards && cardIndex >= 0) {
    cards[cardIndex][cardContainer] = newValue;
    localStorage.setItem("cards", JSON.stringify(cards));
  }
}

showEdit("title");
showEdit("description");
showEdit("dueDate");
showEdit("priority");

newCard(() => {
  const appendCard = document.createElement("div");
  appendCard.innerHTML = createCard();
  container.prepend(appendCard);
});
