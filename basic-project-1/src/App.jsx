import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Course from "./components/Course";
import "./css/Course.css";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} courseProps={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
