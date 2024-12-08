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
  
  const fetchAllCourses = async () => {
    let courses = [];
    try {
      courses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(courses);
  };
  
 

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);

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
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };
 
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);
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
                    enrolling={enrolling} setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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