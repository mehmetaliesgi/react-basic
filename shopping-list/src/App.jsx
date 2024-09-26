import { useState } from "react";

import "./App.css";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  const removeItem = (removeItem) => {
    const newItems = items.filter((item) => {
      return item !== removeItem;
    });
    setItems(newItems);
  };

  return (
    <div className="shopping-list">
      <h2>Items To Buy</h2>
      <form onSubmit={addItem}>
        <input type="text" name="item" placeholder="Add a new item" required />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} onRemoveItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
