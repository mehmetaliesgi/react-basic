import React from "react";
import "../App.css";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input
        type="text"
        className="todo-input"
        id="todo"
        placeholder="Todo Giriniz"
      />
      <button className="todo-button">Todo Oluştur</button>
    </div>
  );
}

export default TodoCreate;
