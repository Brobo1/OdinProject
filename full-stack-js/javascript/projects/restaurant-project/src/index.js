import "./styles.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";

const doc = document.getElementById("content");
const btns = Array.from(document.getElementsByTagName("button"));

homeContent(doc);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.textContent.toLowerCase();

    doc.innerHTML = "";

    if (target === "home") {
      homeContent(doc);
    }
    if (target === "menu") {
      menuContent(doc);
    }
    if (target === "about") {
      aboutContent(doc);
    }
  });
});
