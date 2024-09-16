export function createCard() {
  const container = document.getElementById("container");
  container.innerHTML += `
    <div class="card-container">
    <div class="card-item-container card-title-container">
      <p class="card-component card-title">title</p>
    </div>
    <div class="card-item-container card-description-container">
      <p class="card-component card-description">Description</p>
    </div>
    <div class="card-item-container card-duedate-container">
      <p class="card-component card-duedate">dueDate</p>
    </div>
    <div class="card-item-container card-priority-container">
      <p class="card-component card-priority">priority</p>
    </div>
  </div>
  `;
}
