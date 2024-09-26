import React from "react";

function Item({ item, onRemoveItem }) {
  return (
    <div>
      <li>
        {item}
        <button onClick={() => onRemoveItem(item)}>X</button>
      </li>
    </div>
  );
}

export default Item;
