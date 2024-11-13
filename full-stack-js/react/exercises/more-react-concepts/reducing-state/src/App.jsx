import { useReducer } from "react";
import "./App.css";
import { reducer } from "./reducer.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleClick(btn) {
    if (btn === "inc") dispatch({ type: "increment_count" });
    else if (btn === "dec") dispatch({ type: "decrement_count" });
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => handleClick("dec")}>-</button>
      <button onClick={() => handleClick("inc")}>+</button>
    </>
  );
}

export default App;
