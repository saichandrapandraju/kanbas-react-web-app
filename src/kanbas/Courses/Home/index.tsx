import Modules from "../Modules";
import CourseStatus from "./Status";


export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <h1> HOME </h1>
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>

  );
}
