import React from "react";

function Task() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add new task"
          className="py-1 mx-3 rounded-lg"
        />
        <button className="bg-emerald-600 text-cyan-50 px-4 py-1 m-2 rounded-lg">
          Add
        </button>
      </div>
    </div>
  );
}

export default Task;
