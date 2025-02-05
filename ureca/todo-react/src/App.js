import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue) {
      setTodos([inputValue, ...todos]);
      setInputValue("");
      console.log(todos);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="할 일을 입력하세요."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
