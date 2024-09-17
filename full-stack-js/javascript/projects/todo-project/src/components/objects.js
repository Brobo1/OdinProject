export function createTodo(
  title,
  description,
  dueDate,
  priority,
  notes = [],
  checklist = [],
) {
  const localId = JSON.parse(localStorage.getItem("cards"));
  let id = 0;
  if (localId) {
    id = parseInt(localId[localId.length - 1].id) + 1;
  }
  return { id, title, description, dueDate, priority, notes, checklist };
}

export function note(str) {
  return { str };
}

export function checkItem(str, checked = false) {
  return { str, checked };
}
