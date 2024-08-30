export function homeContent(container) {
  const content = document.createElement("h1");
  content.textContent = "home";
  container.innerHTML = homePage();
}

function homePage() {
  const str = `
  <div>
    <p class="home-title">
      Welcome to wtf aka Where's the Food?!
    </p>
    <p class="text">We have no chef so you'll have to make your own food!</p>
    <p class="text">We have the freshest ingredients leftover from previous customers or provided by yourself</p>
  </div>
  `;

  return str;
}
