import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(key);
  }, []);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
}

export default App;
