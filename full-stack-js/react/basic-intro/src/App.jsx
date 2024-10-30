import "./App.css";
import { TodoList } from "./TodoList.jsx";

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
  const arr = ["something", "other thing", "that thing", "this thing"];
  const arrMt = [];
  const alternate = arr.map((thing) => <li key={thing}>{thing}</li>);

  return (
    <div>
      <h1>Things</h1>
      <List things={arr} condStyle="&&" />
      <TodoList />
    </div>
  );
}
