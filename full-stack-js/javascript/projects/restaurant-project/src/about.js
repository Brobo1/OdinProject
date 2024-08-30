export function aboutContent(container) {
  const content = document.createElement("h1");
  content.textContent = "about";
  container.innerHTML = aboutPage();
}

function aboutPage() {
  const str = `
  <div>
    <p class="text">
      hmmmmmmmmmm
    </p>
    <p class="text">
      It works
    </p>
  </div>
  `;

  return str;
}
