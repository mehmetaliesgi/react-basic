import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";

function Todo() {
  return (
    <div className="todo-div">
      <div>İlk Todo</div>
      <div>
        <FaEdit className="todo-icons" />
        <IoIosRemoveCircle className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
