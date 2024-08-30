export function menuContent(container) {
  const content = document.createElement("h1");
  content.textContent = "menu";
  container.innerHTML = menuPage();
}

function menuPage() {
  const str = `
  <div>

    <p class="text">
      Our menu is your menu.
    </p>
    <p class="text">
      We don't have one, so you have to bring your own recipes.
    </p>
  </div>
  `;

  return str;
}
