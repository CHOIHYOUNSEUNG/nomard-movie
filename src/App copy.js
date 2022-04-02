import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setTodo("");
    setToDos((currentArray) => [...currentArray, toDo]);
    console.log(toDos);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>My ToDos ({toDos.length})</h2>
      <div>
        <input value={toDo} placeholder="todo" onChange={onChange}></input>
      </div>
      <button>submit</button>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </form>
  );
}

export default App;
