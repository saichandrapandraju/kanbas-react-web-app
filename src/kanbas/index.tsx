import React, { useState } from 'react';
import { Routes, Route, Navigate, RouteProps } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as courseClient from "./Courses/client";
interface Course {
  _id: string;
  name: string;
  description: string;
}
export default function Kanbas() {
  // Initialize state for courses and current course
  const [courses, setCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };
  const fetchAllCourses = async () => {
    let courses = [];
    try {
      courses = await courseClient.findAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const [course, setCourse] = useState({ name: "", description: "" });
  const updateCourse = async () => {
    const updatedCourse = await courseClient.updateCourse(course);
    setCourses(courses.map((c) => 
      c._id === updatedCourse._id ? updatedCourse : c
    ));
  };

  return (
    <Session>
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
                    allCourses={allCourses}
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
    </Session>
  );
}