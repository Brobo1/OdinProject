import "./styles.css";

function dropdownMenu() {
  const dropdown = document.getElementById("dropdown");
  const dropdownChildren = dropdown.children[1];
  const dropdownItems = Array.from(dropdownChildren.children);

  dropdownChildren.style.display = "none";

  dropdown.addEventListener("mouseover", () => {
    dropdownChildren.style.display = "flex";
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdownChildren.style.display = "none";
  });

  console.log(dropdownItems);
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("clicked", item.textContent);
    });
  });
}

dropdownMenu();
