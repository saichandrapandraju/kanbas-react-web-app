import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './Assignments.css'; // Import the CSS file for styling
import GreenCheckmark from '../Modules/GreenCheckmark';
import * as db from '../../Database';

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL

  // Find assignments for the current course
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="container">
      {cid ?? "nan"}
      {/* Search bar and buttons */}
      <div className="search-group-wrapper d-flex align-items-center mb-3">
        {/* Search bar styled as per image */}
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            id="wd-search-assignment"
            className="search-bar"
            placeholder="Search..."
          />
        </div>

        {/* Buttons styled as per image */}
        <button id="wd-add-assignment-group" className="btn btn-outline-secondary ms-2">
          +Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger ms-2">
          +Assignment
        </button>
      </div>

      {/* Assignments Header */}
      <div id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">
          ASSIGNMENTS <span className="percentage">40% of Total</span>
        </h3>
        <button className="btn btn-outline-secondary btn-sm">
          <FaPlus /> Add
        </button>
      </div>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-group mt-3">
        {assignments.map((assignment: { _id: string; title: string; course: string; dueDate: string; points: number }) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <a
                className="wd-assignment-link fw-bold"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </a>
              <p className="mb-1">
                Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |{' '}
                <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
              </p>
            </div>
            <div className="checkmark-container">
              {/* Include the GreenCheckmark component here if assignment is complete */}
              {/* <GreenCheckmark /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
