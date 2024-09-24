import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
