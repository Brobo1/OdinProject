import "./styles.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";

const doc = document.getElementById("content");
const btns = Array.from(document.getElementsByTagName("button"));

homeContent(doc);
navStyle("Home");

function navStyle(tab) {
  btns.forEach((btn) => {
    if (btn.textContent === tab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.textContent;
    navStyle(target);
    doc.innerHTML = "";

    if (target === "Home") {
      homeContent(doc);
    }
    if (target === "Menu") {
      menuContent(doc);
    }
    if (target === "About") {
      aboutContent(doc);
    }
  });
});
