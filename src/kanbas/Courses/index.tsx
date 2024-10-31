import React from 'react';
import { Route, Routes } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from './People/Table';
import { FaAlignJustify } from "react-icons/fa6";
import { useParams, useLocation } from "react-router";

interface CoursesProps {
  courses: any[];  // Add interface for props
}

export default function Courses({ courses }: CoursesProps) {
  const { cid } = useParams();
  const location = useLocation();
  
  // Find course from the courses prop instead of importing from Database
  const course = courses.find((course) => course._id === cid);

  // Add error handling for non-existent course
  if (!course) {
    return (
      <div className="alert alert-danger">
        Course not found
      </div>
    );
  }

  // Extract the current section from the path for breadcrumb
  const currentSection = location.pathname.split("/")[4] || "Home";

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course.name} &gt; {currentSection}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation 
            courseId={cid || "123"} 
            location={location} 
          />
        </div>

        <div className="flex-fill">
          <Routes>
            {/* Use 'index' for the default route */}
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route 
              path="Assignments/:aid" 
              element={<AssignmentEditor />} 
            />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
