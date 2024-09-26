import React from "react";
import "../App.css";

function Item({ item, onRemoveItem }) {
  return (
    <div>
      <li>
        {item}
        <button className="delete" onClick={() => onRemoveItem(item)}>
          X
        </button>
      </li>
    </div>
  );
}

export default Item;
