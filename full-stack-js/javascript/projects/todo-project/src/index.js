import "./styles.css";
import arrowDown from "./assets/arrowDown.svg";
import editPen from "./assets/pencil-svgrepo-com.svg";
import { newCard } from "./components/new-card";
import { createCard } from "./components/create-card";

const container = document.getElementById("container");

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
            target.children[0].contentEditable = isEdit;
            if (isEdit) {
              target.children[0].style.outline = "white 1px solid";
            } else {
              target.children[0].style.outline = "none";
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

showEdit("title");
showEdit("description");
showEdit("duedate");
showEdit("priority");

newCard(() => {
  const appendCard = document.createElement("div");
  appendCard.innerHTML = createCard();
  container.prepend(appendCard);
});
