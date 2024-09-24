import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    let newTodos = todos.filter((c) => c.id !== todoId);
    setTodos(newTodos);
  };

  const updateTodo = (propsTodo) => {
    const returnUpdateTodo = todos.map((todo) => {
      if (todo.id !== propsTodo.id) return todo;
      return propsTodo;
    });

    setTodos(returnUpdateTodo);
  };

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
