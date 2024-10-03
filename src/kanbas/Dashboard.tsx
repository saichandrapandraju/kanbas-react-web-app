import React from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css'; // Import a separate CSS file for styling

export default function Dashboard() {
    const courses = [
        { number: "CS1234", name: "React JS", image: "/images/reactjs.png", role: "Full Stack software developer" },
        { number: "CS2345", name: "Database Management Systems", image: "/images/database.jpeg", role: "Database Engineer" },
        { number: "CS3456", name: "Algorithms", image: "/images/algorithms.jpeg", role: "Algorithms Engineer" },
        { number: "CS4567", name: "Machine Learning", image: "/images/ml.jpeg", role: "Machine Learning Engineer" },
        { number: "CS5678", name: "Natural Language Processing", image: "/images/nlp.jpeg", role: "NLP Engineer" },
        { number: "CS6789", name: "Parallel Data Processing", image: "/images/pdp.jpeg", role: "Data Engineer" },
        { number: "CS7890", name: "Mobile Application Development", image: "/images/mad.jpeg", role: "Mobile App Developer" },
        { number: "CS8901", name: "Security and Vulnerabilities", image: "/images/security.jpeg", role: "Security Engineer" }
    ];

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div className="grid-container">
                {courses.map((course, index) => (
                    <div key={index} className="grid-item">
                        <div className="card">
                            <img src={course.image} className="card-img-top" alt={course.name} />
                            <div className="card-body">
                                <h5 className="card-title">{course.number} {course.name}</h5>
                                <p className="card-text">{course.role}</p>
                                <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">
                                    Go
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
