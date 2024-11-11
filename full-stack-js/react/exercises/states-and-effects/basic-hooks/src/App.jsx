import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    fName: "John",
    lName: "Gone",
    age: 30,
  });

  const handleAgeChange = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  return (
    <>
      <h1>
        {person.fName} {person.lName}
      </h1>
      <h1>{person.age}</h1>
      <input
        type="text"
        onChange={(e) =>
          setPerson((prev) => ({ ...prev, fName: e.target.value }))
        }
      />
      <input
        type="text"
        onChange={(e) =>
          setPerson((prev) => ({ ...prev, lName: e.target.value }))
        }
      />
      <button onClick={handleAgeChange}>Increase age</button>
    </>
  );
}

export default App;
