import React from 'react';
import { Link } from "react-router-dom";
import './CoursesNavigation.css'; // Import the CSS file for styling

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation">
            <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className="nav-link">Home</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="nav-link">Modules</Link>
            <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className="nav-link">Piazza</Link>
            <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className="nav-link">Zoom</Link>
            <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/Assignments" className="nav-link">Assignments</Link>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="nav-link">Quizzes</Link>
            <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className="nav-link">Grades</Link>
            <Link id="wd-course-people-link" to="/Kanbas/Courses/People" className="nav-link">People</Link>
        </div>
    );
}
