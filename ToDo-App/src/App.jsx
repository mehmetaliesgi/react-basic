import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div>
        <TodoCreate></TodoCreate>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
