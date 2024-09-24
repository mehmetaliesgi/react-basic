import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheckSquare } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [editedTodo, setEditedTodo] = useState(content);

  const deleteTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = (todo) => {
    const request = {
      id: id,
      content: editedTodo,
    };

    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo-div">
      <div>
        {editable ? (
          <input
            className="todo-input"
            id="todo"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            style={{ width: "400px" }}
          />
        ) : (
          content
        )}
      </div>
      <div>
        {editable ? (
          <FaCheckSquare className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
        <IoIosRemoveCircle className="todo-icons" onClick={deleteTodo} />
      </div>
    </div>
  );
}

export default Todo;
