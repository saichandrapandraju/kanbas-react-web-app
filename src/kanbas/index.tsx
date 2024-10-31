import React, { useState } from 'react';
import { Routes, Route, Navigate, RouteProps } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "./Database";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  // Initialize state for courses and current course
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description"
  });

  // Function to add a new course
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      department: "NEW",
      credits: 3,
      author: "Author"
    };
    setCourses([...courses, newCourse]);
    // Reset form after adding
    setCourse({
      _id: "0", 
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description"
    });
  };

  // Function to delete a course
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  // Function to update a course
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course as any;
        }
        return c;
      })
    );
  };

  return (
    <div id="wd-kanbas" className="container-fluid">
      <div className="row">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/Courses/:cid"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/Courses/:cid/*" 
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}