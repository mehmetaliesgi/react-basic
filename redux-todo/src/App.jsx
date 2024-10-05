import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        width: "600px",
        height: "100vh",
      }}
    >
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
