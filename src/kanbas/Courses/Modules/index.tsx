import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import './Modules.css';  // Import the custom CSS file
import GreenCheckmark from './GreenCheckmark';
import ModuleControls from './ModuleControls';

// Components for module and lesson control buttons
function ModuleControlButtons() {
  return (
    <div className="module-control-buttons">
      {/* <GreenCheckmark /> */}
      <BsGripVertical className="icon" />
      <span className="more-options">
        <i className="fas fa-ellipsis-v"></i>
      </span>
    </div>
  );
}

function LessonControlButtons() {
  return (
    <div className="lesson-control-buttons">
      <GreenCheckmark />

      <span className="more-options">
      <i className="fas fa-ellipsis-v"></i>
      </span>
    </div>
  );
}

export default function Modules() {
  return (
    <div className="modules-container">
        <div style={{ marginBottom: '1rem' }}>
        <ModuleControls />

        </div>
      <ul className="modules-list">
        <li className="module-item">
          <div className="module-title">
            <BsGripVertical className="icon" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="lessons-list">
            {['LEARNING OBJECTIVES', 'Introduction to the course', 'Learn what is Web Development', 'LESSON 1', 'LESSON 2'].map((lesson, index) => (
              <li className="lesson-item" key={index}>
                <BsGripVertical className="icon" />
                {lesson}
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
        <li className="module-item">
          <div className="module-title">
            <BsGripVertical className="icon" />
            Week 2
            <ModuleControlButtons />
          </div>
          <ul className="lessons-list">
            {['LEARNING OBJECTIVES', 'LESSON 1', 'LESSON 2'].map((lesson, index) => (
              <li className="lesson-item" key={index}>
                <BsGripVertical className="icon" />
                {lesson}
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
