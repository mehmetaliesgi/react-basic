import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Course from "./components/Course";

function App() {
  return (
    <div>
      <Header />
      {courses?.map((course) => (
        <Course key={course.id} courseProps={course} />
      ))}
    </div>
  );
}

export default App;
