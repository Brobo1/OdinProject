import "./App.css";
import { TodoList } from "./TodoList.jsx";
import { useState } from "react";

function List(props) {
  if (props.condStyle === "ifs") {
    if (!props.things) {
      return <div>No List</div>;
    }

    if (!props.things.length) {
      return <div>No data in list</div>;
    }

    return (
      <ul>
        {props.things.map((thing) => {
          return thing.startsWith("t") && <li key={thing}>{thing}</li>;
        })}
      </ul>
    );
  } else if (props.condStyle === "terenary") {
    return (
      <>
        {!props.things ? (
          <div>No List</div>
        ) : !props.things.length ? (
          <div>No data in list</div>
        ) : (
          <ul>
            {props.things.map((thing) => {
              return thing.startsWith("s") ? <li>{thing}</li> : null;
            })}
          </ul>
        )}
      </>
    );
  } else if (props.condStyle === "&&") {
    return (
      <>
        {!props.things && <div>No List</div>}
        {!props.things.length && <div>No data in list</div>}
        <ul>
          {props.things.map((thing) => {
            return thing.startsWith("o") && <li>{thing}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default function App() {
  const COLORS = ["red", "green", "blue"];
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  const arr = ["something", "other thing", "that thing", "this thing"];
  const arrMt = [];
  const alternate = arr.map((thing) => <li key={thing}>{thing}</li>);

  return (
    <div className="App" style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type={"button"}
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "active" : ""}
        >
          {color}
        </button>
      ))}
      <h1>Things</h1>
      <List things={arr} condStyle="&&" />
      <TodoList />
    </div>
  );
}
