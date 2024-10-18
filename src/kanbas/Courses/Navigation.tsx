import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Location } from 'react-router-dom'; // Import Location type from react-router-dom
import './CoursesNavigation.css'; // Import the CSS file for styling

// Define the type for the props
interface CoursesNavigationProps {
    courseId: string;  // courseId will be a string
    location: Location; // location will be of type Location from react-router-dom
}

const CoursesNavigation: React.FC<CoursesNavigationProps> = ({ courseId, location }) => {
    const links = [
        { name: "Home", path: `/Kanbas/Courses/${courseId}/Home` },
        { name: "Modules", path: `/Kanbas/Courses/${courseId}/Modules` },
        { name: "Piazza", path: `/Kanbas/Courses/${courseId}/Piazza` },
        { name: "Zoom", path: `/Kanbas/Courses/${courseId}/Zoom` },
        { name: "Assignments", path: `/Kanbas/Courses/${courseId}/Assignments` },  // Static path
        { name: "Quizzes", path: `/Kanbas/Courses/${courseId}/Quizzes` },
        { name: "Grades", path: `/Kanbas/Courses/${courseId}/Grades` },
        { name: "People", path: `/Kanbas/Courses/${courseId}/People` }  // Static path
    ];

    return (
        <div id="wd-courses-navigation">
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    id={`wd-course-${link.name.toLowerCase()}-link`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default CoursesNavigation;
