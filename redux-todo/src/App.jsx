import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <div className="w-1/2 h-1/2 items-center bg-purple-200 rounded-xl">
        <Task />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
