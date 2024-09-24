import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearTodoInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearTodoInput();
  };
  return (
    <div className="todo-create">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        id="todo"
        placeholder="Todo Giriniz"
      />
      <button className="todo-button" onClick={createTodo}>
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
