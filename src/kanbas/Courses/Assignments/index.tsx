import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import './Assignments.css'; // Import the CSS file for styling
import GreenCheckmark from '../Modules/GreenCheckmark';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container">
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
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/Assignments/1">
              A1 - ENV + HTML
            </a>
            <p className="mb-1">
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |{' '}
              <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </p>
          </div>
          <div className="checkmark-container">
            <GreenCheckmark />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/Assignments/2">
              A2 - CSS + BOOTSTRAP
            </a>
            <p className="mb-1">
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |{' '}
              <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </p>
          </div>
          <div className="checkmark-container">
            {/* Include the GreenCheckmark component here when needed */}
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a className="wd-assignment-link fw-bold" href="#/Kanbas/Courses/Assignments/3">
              A3 - JAVASCRIPT + REACT
            </a>
            <p className="mb-1">
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |{' '}
              <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </p>
          </div>
          <div className="checkmark-container">
            {/* Include the GreenCheckmark component here when needed */}
          </div>
        </li>
      </ul>
    </div>
  );
}
