import { greeting } from "./greeting.js";
import "./styles.css";
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

const str = document.createElement("p");
str.innerText = "live test";

document.body.appendChild(image);
document.body.appendChild(str);

console.log(greeting);
