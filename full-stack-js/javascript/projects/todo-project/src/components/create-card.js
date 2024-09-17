export function createCard() {
  return `
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

// function todoCard(todo) {
//   const notes = todo.notes.map((note) => `<p>${note}</p>`).join(" ");
//   const checklist = todo.checklist
//     .map(
//       (item) => `
//   <div class="checkpoint-container">
//       <input type="checkbox">
//       <p>${item.str}</p>
//   </div>`,
//     )
//     .join(" ");
//   return `
//   <div class="card-container">
//     <div class="card-item-container card-title-container">
//       <p class="card-component card-title">${todo.title}</p>
//     </div>
//     <div class="card-item-container card-description-container">
//       <p class="card-component card-description">${todo.description}</p>
//     </div>
//     <div class="card-item-container card-duedate-container">
//       <p class="card-component card-duedate">${todo.dueDate}</p>
//     </div>
//     <div class="card-item-container card-priority-container">
//       <p class="card-component card-priority">${todo.priority}</p>
//     </div>
//     <div class="card-component card-notes">${notes}</div>
//     <div class="card-component card-checklist">${checklist}</div>
//   </div>
//   `;
// }
