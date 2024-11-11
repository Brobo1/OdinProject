const todos = [
  { task: "Learn React", id: crypto.randomUUID() },
  { task: "Learn Redux", id: crypto.randomUUID() },
  { task: "Learn Redux Toolkit", id: crypto.randomUUID() },
  { task: "Learn React Router", id: crypto.randomUUID() },
];

export function TodoList() {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}
