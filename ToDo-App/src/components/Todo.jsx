import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const deleteTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <div className="todo-div">
      <div>{content}</div>
      <div>
        <FaEdit className="todo-icons" />
        <IoIosRemoveCircle className="todo-icons" onClick={deleteTodo} />
      </div>
    </div>
  );
}

export default Todo;
