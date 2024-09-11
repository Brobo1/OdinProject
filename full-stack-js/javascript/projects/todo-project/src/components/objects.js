export function createTodo(
  title,
  description,
  dueDate,
  priority,
  notes = [],
  checklist = [],
) {
  const id = 0;
  return { id, title, description, dueDate, priority, notes, checklist };
}

export function note(str) {
  return { str };
}

export function checkItem(str, checked = false) {
  return { str, checked };
}
